import React from "react";
import styled, { css, keyframes } from "styled-components";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: keyof typeof theme | string;
  size?: "small" | "medium" | "large";
  variant?: "solid" | "outlined" | "text" | "wide";
  loading?: boolean;
}

const theme = {
  primary: "#007bff",
  secondary: "#6c757d",
  success: "#28a745",
  danger: "#dc3545",
  warning: "#ffc107",
  info: "#17a2b8",
};

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const StyledButton = styled.button<ButtonProps>`
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  ${({ size }) => {
    switch (size) {
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

  ${({ color = "primary", variant }) => {
    const buttonColor = theme[color as keyof typeof theme] || color;

    switch (variant) {
      case "outlined":
        return css`
          background-color: transparent;
          border: 2px solid ${buttonColor};
          color: ${buttonColor};

          &:hover:not(:disabled) {
            background-color: ${buttonColor};
            color: white;
          }
        `;
      case "text":
        return css`
          background-color: transparent;
          color: ${buttonColor};

          &:hover:not(:disabled) {
            background-color: rgba(0, 0, 0, 0.04);
          }
        `;
      case "wide":
        return css`
          width: 100%;
          background-color: ${buttonColor};
          color: white;

          &:hover:not(:disabled) {
            background-color: ${darkenColor(buttonColor, 0.1)};
          }
        `;
      default:
        return css`
          background-color: ${buttonColor};
          color: white;

          &:hover:not(:disabled) {
            background-color: ${darkenColor(buttonColor, 0.1)};
          }
        `;
    }
  }}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.3);
  }

  ${({ loading }) =>
    loading &&
    css`
      color: transparent;
      pointer-events: none;

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

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.3s ease-out, height 0.3s ease-out;
  }

  &:hover:not(:disabled)::before {
    width: 300px;
    height: 300px;
  }
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
