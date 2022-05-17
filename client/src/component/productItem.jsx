import { FavoriteBorder, SearchOutlined, ShoppingBasketOutlined } from "@material-ui/icons"
import styled from "styled-components"

const ProductIteminfo= styled.div`
width:100%;
height:100%;
position:absolute;
top:0;
left:0;
background-color:rgb(0,0,0,0.2);
z-index:3;
display:flex;
align-items:center;
justify-content:center;
cursor:pointer;


`;

const Container =styled.div`
flex:1;
margin:5px;
min-width:280px;
height:350px;
display:flex;
align-items:center;
justify-content:center;
background-color:#CCAE88;
position:relative;


`;


const Image= styled.img`
width:250px;
height:250px;
border-radius:50%;
position: absolute;


`;



const Icon= styled.div`
width:40px;
height:40px;
border-radius:50%;
background-color:#FFFEF7;
display:flex;
align-items:center;
justify-content:center;
margin:10px;

`;

const ProductItem = ({item}) => {
  return (
    <Container>
        <Image src={item.image} key={item.id}/>
        <ProductIteminfo>
            <Icon>
                <ShoppingBasketOutlined/>
            </Icon>
            <Icon>
                <SearchOutlined/>
            </Icon>
            <Icon>
                <FavoriteBorder/>
            </Icon>
        </ProductIteminfo>
    </Container>
  )
}

export default ProductItem