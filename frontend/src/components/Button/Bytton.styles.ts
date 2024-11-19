import styled, { css, keyframes } from "styled-components";

// Define the props for the Button component
export interface ButtonProps {
  color?: string;
  size?: "small" | "medium" | "large";
  variant?: "solid" | "outlined" | "text" | "wide";
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

// Define the default theme colors
const theme = {
  primary: "#white",
  secondary: "#6c757d",
  success: "#28a745",
  danger: "#dc3545",
  warning: "#ffc107",
  info: "#17a2b8",
};

// Keyframes for the loading spinner animation
export const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Styled component for the Button
export const StyledButton = styled.button<ButtonProps>`
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  /* Size styles */
  ${(props) => {
    switch (props.size) {
      case "small":
        return css`
          font-size: 12px;
          padding: 8px 16px;
        `;
      case "large":
        return css`
          font-size: 18px;
          padding: 16px 32px;
        `;
      default:
        return css`
          font-size: 16px;
          padding: 12px 24px;
        `;
    }
  }}

  /* Variant styles */
  ${(props) => {
    const color =
      theme[props.color as keyof typeof theme] || props.color || theme.primary;

    switch (props.variant) {
      case "outlined":
        return css`
          background-color: transparent;
          border: 2px solid ${color};
          color: ${color};

          &:hover:not(:disabled) {
            background-color: ${color};
            color: white;
          }
        `;
      case "text":
        return css`
          background-color: transparent;
          color: ${color};

          &:hover:not(:disabled) {
            background-color: rgba(0, 0, 0, 0.04);
          }
        `;
      case "wide":
        return css`
          width: 100%;
          border: 2px solid ${color};
          color: ${color};
          width: 100%
          &:hover:not(:disabled) {
            background-color: ${color};
            color: white;
          }
        `;
      default:
        return css`
          background-color: ${color};
          color: white;

          &:hover:not(:disabled) {
            background-color: ${darkenColor(color, 0.1)};
          }
        `;
    }
  }}

  /* Disabled state */
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
    `}

  /* Focus state */
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.3);
  }

  /* Loading state */
  ${(props) =>
    props.loading &&
    css`
      color: transparent;
      pointer-events: none;
      position: relative;

      &::after {
        content: "";
        position: absolute;
        width: 16px;
        height: 16px;
        top: 50%;
        left: 50%;
        margin-top: -8px;
        margin-left: -8px;
        border-radius: 50%;
        border: 2px solid #ffffff;
        border-color: #ffffff transparent #ffffff transparent;
        animation: ${spin} 1.2s linear infinite;
      }
    `}
`;

function darkenColor(color: string, amount: number): string {
  return `#${color
    .replace(/^#/, "")
    .replace(/../g, (color) =>
      (
        "0" +
        Math.min(255, Math.max(0, parseInt(color, 16) - amount * 255)).toString(
          16
        )
      ).slice(-2)
    )}`;
}
