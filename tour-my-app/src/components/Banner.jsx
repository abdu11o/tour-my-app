import styled from "styled-components"
import img from "../images/banner.png"
import Container from "../layout/Container"


const Section = styled.section`
 background: url(${img});
 height: 500px;
 background-position: center;
 background-size: cover;
 position: relative;
 background-repeat: no-repeat;
`

const Content = styled(Container)`
    position: absolute ;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    z-index: 10;
`

const Title = styled.h1`
    color: #fff;
    font-size: 150px;
    font-weight: bold;
    text-transform: uppercase;
`

const Text = styled.p`
 color: #fff;
 font-size: 30px;
 font-weight: 500;
`

const Div = styled.div`
position: absolute;
background-color: rgba(0, 0, 0, 0.6);
width: 100%;
height: 100%;
top: 0;
left: 0;
opacity: 0.3;
`

const Banner = () =>{
    return(
        <>
         <Section>
             <Div></Div>
             <Content>
                 <Title>journey</Title>
                 <Text>Book your way to the dream with us!</Text>
             </Content>
         </Section>
        </>
    )
}

export default Banner

