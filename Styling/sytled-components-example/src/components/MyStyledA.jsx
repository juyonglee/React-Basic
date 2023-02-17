import React from "react";
import styled from "styled-components";

const MyStyledA = styled.a.attrs(props => (
    {
      target: "_BLANK",
      href: "https://www.google.com"
    }
))`
  color: ${props => props.color};
`

export default MyStyledA
