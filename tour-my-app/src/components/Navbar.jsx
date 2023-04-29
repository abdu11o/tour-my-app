
import styled from 'styled-components'
import logo from '../images/logo.png'
import Container from '../layout/Container'

const Header = styled.header`
    padding: 20px 0;
`

const HeaderContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const List = styled.ul`
    display: flex;
    align-items: center;
    gap: 3em;
    list-style: none;
`

const Lins = styled.a`

`
const links = [
    {
        name: "Вакансии",
        link: "vacancy"
    },
    {
        name: "Где купить?",
        link: "pay"
    },
    {
        name:"Агенствам",
        link: "agency"
    }
]

const Navbar = () =>{

    return(
        <Header>
            <HeaderContainer>
                <a href="">
                    <img src={logo} alt="" />
                </a>
                <List>
                    {links.map((item,index)=>(
                        <li key={index}><Lins href={item.link}>{item.name}</Lins></li>
                    ))}
                </List>
            </HeaderContainer>
        </Header>
    )
}

export default Navbar