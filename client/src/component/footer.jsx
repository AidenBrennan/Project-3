import { Email, Facebook, Instagram, Phone, Twitter } from '@material-ui/icons';
import styled from 'styled-components';
import {mobile} from '../responsive';

const Container = styled.div`
display:flex;
background-color:#CCAE88;
${mobile({flexDirection:"column", height:"50%"})};
`;
const  Left = styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;
${mobile({fontSize:"10px", margin:"5px 5px"})};
`;

const Center = styled.div`
flex:1;
padding:20px;
${mobile({display:"none"})};
`;

const Title =styled.h3`
margin-bottom:30px;
${mobile({fontSize:"10px"})};

`;

const List = styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;
${mobile({fontSize:"10px"})};

`;

const ListItems = styled.li`
width:50%;
margin-bottom: 10px;
${mobile({fontSize:"10px", width:"25px"})};
`;

const Right = styled.div`
flex:1;
padding:20px;
${mobile({fontSize:"10px",display:"flex",flexDirection:"column",  alignItems:"right",position:"relative",bottom:"50px"})};

`;

const Logo = styled.h1`
color:#3C2218;
${mobile({fontSize:"10px"})};

`;
const Description = styled.p`
color:#3C2218;
margin:20px 0px;
${mobile({display:"none"})};

`;

const Socialicon = styled.h1`
width:40px;
height:40px;
border-radius:50%;
background-color:#FFFEF7;
color:#3C2218;
display:flex;
align-items:center;
justify-content: center;
margin-right:20px;
${mobile({margin:"25px 5px"})};

`;
const Socialcontainer =styled.div`
display:flex;


`;

const ContactItem=styled.div`
margin-bottom:20px;
display:flex;
align-items: center;
`
const Payment = styled.image`
width:50%;
`


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>the COFFEE MARKET</Logo>
            <Description>
                If you would like to find out more on the different types of Coffee from around the World, please visit "About my favourite coffee".
            </Description>
            <Socialcontainer>
                <Socialicon>
                    <Facebook/>
                </Socialicon>
                <Socialicon>
                    <Instagram/>
                </Socialicon>
                <Socialicon>
                    <Twitter/>
                    </Socialicon>
            </Socialcontainer>
        </Left>
        <Center>
            <Title>
                Useful Links
            </Title>
            <List>
            <ListItems>Home</ListItems>
            <ListItems>Shopping Basket</ListItems>
            <ListItems>Cofee</ListItems>
            <ListItems>Barista Equipment</ListItems>
            <ListItems>About my favourite coffee</ListItems>
            <ListItems> Wish List</ListItems>
            <ListItems>Terms and Conditions</ListItems>
            </List>
           
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><Phone style={{marginRight:"10px"}}/>
                (02) 9999 99999
            </ContactItem>
            <ContactItem><Email style={{marginRight:"10px"}}/>
                coffeeMarket@coffee.com.au
            </ContactItem>
            <Payment src="https//i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}

export default Footer