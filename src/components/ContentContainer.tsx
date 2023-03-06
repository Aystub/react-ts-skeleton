import { MQ } from "../styles/breakpoints";
import styled from "styled-components";

const ContentContainer = styled.div`
  flex: auto;
  width: 100%;
  ${MQ.md} {
    overflow-x: scroll;
  }
`;

export default ContentContainer;