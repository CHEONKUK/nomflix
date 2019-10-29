import React from "react";
import PropType from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  padding-top: 50px;
`;

const Text = styled.span`
  color: ${props => props.color};
  font-size: 18px;
  font-weight: 500;
`;

const Message = ({ text, color }) => (
  <Container>
    <Text color={color}>{text}</Text>
  </Container>
);

Message.propType = {
  text: PropType.string.isRequired,
  color: PropType.string.isRequired
};

export default Message;
