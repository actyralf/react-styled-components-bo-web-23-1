import OldStyledButton from "../components/OldButton";
import StyledButton from "../components/StyledButton";
import styled from "styled-components";
import Link from "next/link";

const StyledContainer = styled.div`
  width: 400px;
  height: 200px;
  border: 1px solid black;
  background-color: var(--color-primary);
`;

const StyledLink = styled(Link)`
  font-weight: bold;
  text-decoration: none;
`;

function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default function HomePage() {
  return (
    <div>
      <h1>Hello from Next.js</h1>
      <OldStyledButton
        onClick={() => {
          console.log("Click");
        }}
      >
        Old Button
      </OldStyledButton>
      <StyledButton
        variant="secondary"
        onClick={() => {
          console.log("Test");
        }}
      >
        Test
      </StyledButton>

      <StyledLink href="/">Das ist ein Next Link</StyledLink>

      <Container>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          repudiandae quod magni. Delectus, nam, dolorum corporis, ullam nihil
          aliquid a in fugiat nostrum repellendus quas libero vel maxime! Eius,
          tempore.
        </p>
      </Container>
    </div>
  );
}
