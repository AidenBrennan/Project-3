import styled from "styled-components";
import Navbar from "../component/navbar";
import Announcements from "../component/announcements";
import Newsletter from "../component/newsLetter";
import Footer from "../component/footer";
import { Add, Remove } from "@material-ui/icons";
import {mobile} from "../responsive";


const Container =styled.div`

`;

const Wrapper =styled.div`
padding:50px;
display:flex;
${mobile({padding:"10px",flexDirection:"column"})};

`;
const ImageContainer =styled.div`
flex:1;
`;
const Image =styled.img`
width:100%;
height:90vh;
object-fit:cover;
${mobile({height:"40vh"})};
`;
const Price =styled.span`
font-weight:100;
font-size:40px;
`;
const FilterContainer= styled.div`
width:50%;
margin: 30px 0px;
display:flex;
justify-content:space-between;
${mobile({width:"100%"})};
`;
const Filter = styled.div`
display:flex;
align-items:center;
`;
const FilterTitle =styled.span`
font-size:20px;
font-weight:bold;
margin: 5px 5px;
display:flex;
justify-content:space-between;

`;

const FilterSize =styled.select`
border: 1px solid ;
margin: 0px 5px;
padding: 5px;
cursor:pointer;
`;

const FilterSizeOption = styled.option`
`;

const ProductInfo =styled.div`
flex:1;
padding:0px 50px;
${mobile({padding:"10px"})};

`;
const Description =styled.p`
margin:20px 0px;

`;
const Title=styled.h1`
font-weight:bold;
`;

const AddContainer=styled.div`
width:50%;
display:flex;
align-items:center;
justify-content:space-between;
${mobile({padding:"100%"})};

`;
const AmountContainer=styled.div`
display:flex;
align-items:center;
font-weight:700;

`;

const Quantity=styled.span`
width:30px;
height:30px;
border-radius:10px;
border: 1px solid #3C2218;
display:flex;
align-items:center;
justify-content:center;
margin:0px 5px;
`;

const Button=styled.button`
padding:15px;
border:2px solid #3C2218;
font-weight:500;
background-color:#FFFEF7;
cursor:pointer;

`;




const Products = () => {
  return (
    <Container>
     <Navbar/>
      <Announcements/>
      <Wrapper>
          <ImageContainer>
          <Image src="https://thumbs.dreamstime.com/b/close-up-bowl-arabica-coffee-beans-full-over-old-wooden-table-36767554.jpg"/>
          </ImageContainer>
          <ProductInfo>
              <Title>Arabica Beans</Title>
              <Description>
              Arabica beans are grown regions with altitude. They appearance are bright in colour and slightly acidic. When roasted they can come in a number of varieties of both aromas and tastes. 
              Many varities of Arabic beans can have low acidity levels. These varieties include Bourbon, Blue Mountain, Typica, and Caturra.
              If you sample the coffee on your front palat, you will find the taste to be sweet and salinity. A delicious experience.
              Arabica coffee is always taste better when you prepare it with a pour-over or drip coffee maker. The filtration seperates the concentrated coffee from its crushed flesh.
              </Description>
              <Price>$50.00</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle> Size</FilterTitle> 
                        <FilterSize>
                            <FilterSizeOption>Small = $50.00</FilterSizeOption>
                        <FilterSizeOption>Medium = $70.00</FilterSizeOption>
                        <FilterSizeOption>Large= $100.00</FilterSizeOption>
                        </FilterSize>
                    </Filter>

                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove/>
                       <Quantity>1</Quantity>
                        <Add/>
                    </AmountContainer>

                    <Button>ADD TO BASKET</Button>

                </AddContainer>
          </ProductInfo>
      </Wrapper>
      <Newsletter/>
        <Footer/>

    </Container>
  )
}

export default Products