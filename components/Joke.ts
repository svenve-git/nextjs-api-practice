import styled from "styled-components"

export default styled.div`
  margin: auto;
  padding-left: 2rem;
  padding-right: 2rem;

  align-content: center;
  justify-content: center;
  position: relative;

  color: ${(props) => (props.setup ? "#bbccdd" : "#998877")};
  font-size: ${(props) => (props.setup ? "2.5rem" : "2rem")};
  text-transform: ${(props) => (props.setup ? "none" : "uppercase")};
  text-align: ${(props) => (props.setup ? "left" : "right")};
  padding-bottom: ${(props) => (props.setup ? "90px" : "-90px")};
  padding-top: ${(props) => (props.setup ? "-90px" : "90px")};
  /* flex-shrink: ${(props) => (props.setup ? 1 : 1)}; */
`
