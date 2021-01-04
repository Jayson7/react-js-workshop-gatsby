import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const menuData = [
  { title: "Courses", icon: "images/icons/courses.svg", link: "/courses" },
  { title: "Tutorials", icon: "images/icons/tutorials.svg", link: "/courses" },
  {
    title: "Pricing",
    icon: "images/icons/pricing.svg",
    link: "/pricing",
  },
]

export default function Header() {
  return (
    <Wrapper>
      <img src="/images/logos/logo.svg" />
      <MenuWrapper>
        {menuData.map((item, index) => (
          <Link to={item.link} key={index}>
            <MenuItem>
              <img src={item.icon} alt={item.title} />
              {item.title}
            </MenuItem>
          </Link>
        ))}
      </MenuWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  top: 60px;
  display: grid;
  grid-template-columns: 44px auto;
  width: 100%;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;
`

const MenuWrapper = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(3, auto);
`

const MenuItem = styled.div`
  color: rgba(255, 255, 255, 0.7);
  display: grid;
  grid-template-columns: 24px auto;
  gap: 10px;
  align-items: center;
  padding: 10px;
`
