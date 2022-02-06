import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Container } from "../containers/Container"
import {IoMoonOutline, IoMoon} from "react-icons/io5"

const HeaderEl = styled.header`
box-shadow: var(--shadow);
background: var(--color-ui-base);
`
const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 2rem 0;
`
const ThemeSwitcher = styled.div`
color:var(--color-text);
font-size: var(--fs-sm);
cursor: pointer;
font-weight: var(--fw-bold);
text-transform: capitalize;
`
const Title = styled.a.attrs({
    href: "/"
})`
text-decoration: none;
color:var(--color-text);
font-size: var(--fs-sm);
font-weight: var(--fw-bold);
`

function Header(props) {
    const [theme, setTheme] = useState("light")

    const toggleTheme = () =>{
        setTheme( theme => theme === "light" ? "dark" : "light")
    }
 
useEffect(()=>{
    document.body.setAttribute("data-theme",theme)
},[theme])
    return (
        <HeaderEl>
            <Container>
                <Wrapper>
                    <Title> Where is the world</Title>
                    <ThemeSwitcher onClick={toggleTheme} >
                        {theme === "light" ? <IoMoonOutline size="16px"/> : <IoMoon  size="16px"/>}
                         <span style={{marginLeft:"0.75rem"}}>{theme} theme</span>
                    </ThemeSwitcher>
                </Wrapper>
            </Container>
        </HeaderEl>
    );
}

export default Header;

