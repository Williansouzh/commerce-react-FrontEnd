import React from "react";
import { ButtonProps, StyledButton } from "./Bytton.styles";

// Button component
export const Button: React.FC<ButtonProps> = ({
  color = "primary",
  size = "medium",
  variant = "solid",
  disabled = false,
  loading = false,
  type = "button",
  onClick,
  children,
  ...props
}) => {
  return (
    <StyledButton
      color={color}
      size={size}
      variant={variant}
      disabled={disabled || loading}
      loading={loading}
      onClick={onClick}
      type={type}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default function ButtonExample() {
  return (
    <div className="flex flex-wrap gap-4 p-4">
      <Button onClick={() => console.log("Clicked!")}>Default Button</Button>
      <Button color="secondary" size="small">
        Small Secondary
      </Button>
      <Button color="success" size="large">
        Large Success
      </Button>
      <Button color="danger" variant="outlined">
        Outlined Danger
      </Button>
      <Button color="warning" variant="text">
        Text Warning
      </Button>
      <Button color="info" disabled>
        Disabled Info
      </Button>
      <Button color="primary" loading>
        Loading
      </Button>
    </div>
  );
}
