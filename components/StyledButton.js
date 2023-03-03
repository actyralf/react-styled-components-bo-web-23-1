import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  padding: 12px;
  /* background-color: var(--color-secondary); */
  background-color: ${({ variant }) =>
    variant === "secondary"
      ? "var(--color-secondary);"
      : "var(--color-primary);"};
  &:hover {
    background-color: red;
  }
`;

export default StyledButton;
