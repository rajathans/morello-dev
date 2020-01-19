import React from "react";
import styled from "@emotion/styled";

const Logo = ({ fill = "white" }) => {
  return (
    <LogoContainer>
      <h3 style={{ color: fill }}>
        morello<span style={{ color: "#7A8085" }}>.dev</span>
      </h3>
    </LogoContainer>
  );
};

export default Logo;

const LogoContainer = styled.div`
  h3 {
    font-size: 3rem;
  }

  @media screen and (max-width: 735px) {
    h3 {
      font-size: 2rem;
    }
  }
`;
