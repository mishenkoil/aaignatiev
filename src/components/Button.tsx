import * as React from "react";
import styled from "styled-components";
import { FC, ReactNode } from "react";
import { ButtonProps, Button as NextUIButton } from "@nextui-org/react";

type Props = {
  children?: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
  icon?: string;
  isDisabled?: boolean;
} & Omit<ButtonProps, "variant">;

const StyledButton = styled(NextUIButton)<{
  variant: "primary" | "secondary";
  fullWidth: boolean;
  isDisabled?: boolean;
}>`
  display: block;
  flex-shrink: 0;
  height: fit-content;
  border-radius: 42px;
  padding: 12px 16px;
  font:
    400 16/24 var(--font-inter),
    sans-serif;
  cursor: pointer;
  outline: none;
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};

  ${(props) =>
    props.variant === "primary"
      ? `
    background-color: ${props.isDisabled ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 1)"};
    color: ${props.isDisabled ? "rgba(255, 255, 255, 1)" : "rgba(4, 1, 11, 1)"};
    opacity: 1;
    border: none;
  `
      : `
    background: transparent;
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.2);
  `}
`;

const StyledIconButton = styled(NextUIButton)`
  width: 3rem;
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 42px;
  background-color: rgba(255, 255, 255, 0.1);

  transition-property: transform, color, background, background-color,
    border-color, text-decoration-color, fill, stroke, opacity;
  transition-timing-function: ease;
  transition-duration: 250ms;
`;

const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const ButtonIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 24px;
`;

export const Button: FC<Props> = ({
  children,
  onClick,
  variant = "primary",
  fullWidth = false,
  icon,
  isIconOnly,
  ...props
}) => {
  if (isIconOnly) {
    return (
      <StyledIconButton
        isIconOnly
        aria-label={typeof children === "string" ? children : undefined}
        fullWidth={fullWidth}
        size="lg"
        variant={variant}
        onPress={onClick}
        {...props}
      >
        <ButtonContent>
          {children}
          {icon && <ButtonIcon alt="Button icon" src={icon} />}
        </ButtonContent>
      </StyledIconButton>
    );
  }

  return (
    <StyledButton
      aria-label={typeof children === "string" ? children : undefined}
      fullWidth={fullWidth}
      size="lg"
      variant={variant}
      onPress={onClick}
      {...props}
    >
      <ButtonContent>
        {children}
        {icon && <ButtonIcon alt="Button icon" src={icon} />}
      </ButtonContent>
    </StyledButton>
  );
};
