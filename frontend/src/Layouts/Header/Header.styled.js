import { Button } from "react-bootstrap";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const TaskBtn = styled(Button)`
  margin: 20px 10px 0px 0px;
  margin-left: auto;
  :hover {
  }

  @media (min-width: 768px) {
    width: auto;
    margin-right: 20px;
  }
`;
