import { ElementType, memo } from "react";
import { StyledButtonContainer, StyledIconButton, StyledTypography } from "./SideNavButton-styled";

interface SideNavButtonProps {
  name: string;
  label: string;
  Icon: ElementType;
  onClick: () => void;
}

export const SideNavButton = memo(function SideNavButton({ 
  name,
  label,
  Icon,
  onClick 
}: SideNavButtonProps) {
  return (
    <StyledButtonContainer>
      <StyledIconButton
        aria-label={name}
        onClick={onClick}
      >
        <Icon fontSize="large" />
        <StyledTypography variant="body2">
          {label}
        </StyledTypography>
      </StyledIconButton>
    </StyledButtonContainer>
  );
});