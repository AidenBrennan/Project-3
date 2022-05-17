import { Send } from '@material-ui/icons'
import styled from 'styled-components'

const Container = styled.div`
height:60vh;
background-color:#3C2218;
display:flex;
align-items: center;
justify-content:center;
flex-direction: column;

`;
const Title = styled.h1`
font-size:70px;
margin-bottom: 20px;
color:#FFFEF7;
`;

const Description = styled.div`
font-size:24px;
font-weight:300;
margin-bottom:20px;
color:#FFFEF7;


`;

const Inputcontainter = styled.div`
width:50%;
height:40px;
background-color:#FFFEF7;
display:flex;
justify-content:space-between;
border:1px solid white,

`;

const Input = styled.input`
border:none;
flex:8;
padding-left:20px;
`;


const Button = styled.button`
flex:1;
border:none;
background-color:#CCAE88;
color:#3C2218;
`;



const NewsLetter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get the latest information and updates on our coffee products.</Description>
        <Inputcontainter>
        <Input placeholder="Your email"/>
        <Button>
            <Send/>
        </Button>
        </Inputcontainter>


    </Container>
  )
}

export default NewsLetter