import React from "react";
import ContentContainer from "../components/ContentContainer";
import styled from "@emotion/styled/macro";

const HomeTitle = styled.h3`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  text-align: center;
`;

const Home: React.FC = () => {

  return (
    <ContentContainer>
      <HomeTitle>Future home of something awesome!</HomeTitle>
    </ContentContainer>
  )
}

export default Home;
