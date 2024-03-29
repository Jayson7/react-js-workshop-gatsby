import React from "react"
import styled from "styled-components"
import MockupAnimations from "../animations/MockupAnimations"
import PurchaseButton from "../buttons/PurchaseButton"
import { themes } from "../styles/ColorStyles"
import { H1, MediumText } from "../styles/TextStyles"

function HeroSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title>React JS Virtual Workshop 🚀</Title>
          <Description>
            Learn how to start your career as a full-stack web developer 🔥.
            Build a clone of a real-world full-stack application like Airbnb,
            Netflix, or Amazon from scratch... In one weekend.
          </Description>
          <PurchaseButton
            title="Start Learning"
            subtitle="Build a Full-Stack application"
          />
        </TextWrapper>
        <MockupAnimations />
      </ContentWrapper>
    </Wrapper>
  )
}

export default HeroSection

const Wrapper = styled.div`
  background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
  overflow: hidden;
`
const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto; // center
  padding: 200px 30px;
  display: grid;
  grid-template-columns: 360px auto;
`

const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;
`

const Title = styled(H1)`
  color: ${themes.dark.text1};
`

const Description = styled(MediumText)``
