import { ArrowLeftTwoTone, ArrowRightTwoTone } from "@material-ui/icons"
import styled from "styled-components"
import React, {useState} from 'react'
import {sliderItems} from "../data"

const Container = styled.div`
width: 100%;
height:100vh;
display: flex;
background-color:#CCAE88;
position:relative;
overflow:hidden;

`;

const Wrapper = styled.div`
 height:100%;
 display: flex;
 transform:translateX(${props=>props.slideIndex * -100}vw);


`;

const Slide = styled.div`
width:100vw;
height:100vh;
display:flex;
align-items: center;
background-color:#CCAE88;
`;
const ImageContainer = styled.div`
height:100%;
flex:1;
`;

const Image = styled.img`
height:100%;

`;
const ProductInfoContainer = styled.div`
flex:1;
padding:50px;
`;

const Heading = styled.h1`
color:#FFFEF7;
font-size:70px;
`;
const Description = styled.p`
color:#FFFEF7;
margin:50px 0px;
font-size:40px;
`;

const Button = styled.button`
display:flex;
align-item:center;
margin-left: 25px;
padding:10px;
font-size:25px;
border-radius: 5px; 
border-color:#CCAE88;
cursor: pointer;
opacity:0.5;

`;



const Arrow = styled.div`
width:45px;
height:45px;
background-color:#FFFEF7;
border-radius:50%;
display:flex;
align-items: center;
justify-content: center;
position:absolute;
top:0;
bottom:0;
left:${props => props.direction === "left" && "10px"};
right:${props => props.direction === "right" && "10px"};
margin:auto;
cursor: pointer;
opacity:0.5;
z-index:2;

`;



const Slider = () => {

const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction)=> {

        if(direction==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 3)
        }else{
            setSlideIndex(slideIndex < 3 ? slideIndex+1: 0)
        }

    };


    return (
        <Container>
            <Arrow direction="left" onClick={() =>handleClick("left")}>
                <ArrowLeftTwoTone fontSize="large" />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                <Slide>
                    <ImageContainer>
                        <Image src={item.image}/>
                    </ImageContainer>
                    <ProductInfoContainer>
                        <Heading>{item.heading}</Heading>
                        <Description>{item.description}</Description>
                        <Button>ENTER</Button>
                    </ProductInfoContainer>
                </Slide>
                  ))}
                
            </Wrapper>
            <Arrow direction="right" onClick={() =>handleClick("right")}>
                <ArrowRightTwoTone fontSize="large" />
            </Arrow>

        </Container>
    )
}

export default Slider