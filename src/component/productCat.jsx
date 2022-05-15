import styled from "styled-components"
import {coffeeProducts} from "../data"
import Product from "./productItem"

const Container =styled.div`
padding:20px;
display:flex;
flex-wrap:wrap;
justify-content: space-between;


`;

const ProductCat = () => {
  return (
    <Container>
      {coffeeProducts.map((item)=> (        
      
      <Product item = {item} key={item.id}/>
        
        ))}

    </Container>
  )
}

export default ProductCat