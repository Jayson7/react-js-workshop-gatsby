import React from "react"
import styled from "styled-components"
// rfc

export default function PurchaseButton(props) {
  const { title, subtitle } = props
  return (
    <Wrapper>
      <Title>{title || "Enroll Now"}</Title>
      <Subtitle>{subtitle || "Only $297"}</Subtitle>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: linear-gradient(180deg, #ffffff 0%, #d9dfff 100%);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(23, 0, 102, 0.2),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  width: 280px;
  height: 77px;
`

const Title = styled.div``

const Subtitle = styled.p``
