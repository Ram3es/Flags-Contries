import styled from "styled-components"

const Wrapper = styled.section`
background: papayawhip;
padding: 4em
`
const Title = styled.h1`
font-size: 1.5em;
text-align: center;
color: palevioletred
`


function TestLibruary(props) {
    return <Wrapper>
        <Title>
            Hello World
        </Title>
    </Wrapper>
}

export default TestLibruary;