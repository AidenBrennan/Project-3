
import { Badge } from "@material-ui/core";
import { Search, ShoppingBasketOutlined } from "@material-ui/icons";
import React from "react"
import styled from "styled-components"

const Container = styled.div`
    height:100px;
    background-color: #3C2218;
`;

const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
align-item: center;
justify-content: space-between;

`;

const Left = styled.div`
flex: 1;
`;

const Language = styled.span`
font-size:14px;
cursor: pointer;
color:white;
`;

const Searchcontainer = styled.div`
display:flex;
align-item:center;
margin-left: 25px;
padding:5px;

`;
const Input = styled.input`
border:none;
border: 1px solid #FFFEF7;
`;


const Center = styled.div`
flex:1;
text-align:center;
color:#FFFEF7;

`;

const Logo = styled.h1`
font-weight: bold;
`;


const Right = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: flex-end;
`;

const MenuItems = styled.div`
 font-size: 14px;
 cursor: pointer;
 color: #FFFEF7;
 margin-left:25px;
`;

const navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>English</Language>
                    <Searchcontainer>
                        <Input/>
                        <Search style={{ color: "white", fontSize: 16 }} />
                    </Searchcontainer>

                </Left>
                <Center><Logo>the COFFEE MARKET</Logo></Center>
                <Right>

                    <MenuItems>REGISTER</MenuItems>
                    <MenuItems>SIGN IN</MenuItems>
                    <MenuItems>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingBasketOutlined />
                        </Badge>

                    </MenuItems>

                </Right>

            </Wrapper>
        </Container>
    )
}

export default navbar