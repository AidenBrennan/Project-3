import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcements from "../component/announcements";
import Footer from "../component/footer";
import Navbar from "../component/navbar";
import {mobile} from "../responsive"

const Container= styled.div`
`;

const Wrapper= styled.div`
padding:20px;
${mobile({padding:"10px"})};
`;

const Title= styled.h1`
font-weight:bold;
text-align:center;
${mobile({fontSize:"10px",display:"flex",alignItem:"center",})};
`;

const Top= styled.div`
display:flex;
align-items:center;
justify-center: space-between;
padding:20px;
`;

const TopButton = styled.button`
padding:10px;
font-weight:600;
cursor:pointer;
border:${props=>props.type ==="filled" && "none"};
background-color:${props=>props.type ==="filled" ? "#3C2218": "transparent"};
color:${props=>props.type ==="filled" && "#FFFEF7"};
${mobile({fontSize:"5px",display:"flex",alignItem:"center",flexDirection:"column", marginRight:"10px"})};
`;

const Bottom= styled.div`
display:flex;
justify-content: space-between;
${mobile({flexDirection:"column"})};
`;

const TopTexts= styled.div`
${mobile({display:"none"})};
`;

const TopText = styled.span`
text-decoration:underline;
cursor:pointer;
margin: 0px 10px;
${mobile({display:"none"})};

`;



const Hr = styled.hr`
background-color:#CCAE88;
border:none;
height:1px;
`

const Product=styled.div`
display:flex;
justify-content:space-between;
${mobile({flexDirection:"column"})};
`;

const ProductDetail=styled.div`
flex:2;
display:flex;
`;

const Image=styled.img`
width:200px;
${mobile({width:"100px"})};
`;

const ProductName=styled.span`
${mobile({fontSize:"7px"})};
`;

const ProductId=styled.span`
${mobile({fontSize:"7px"})};
`;


const ProductQuality=styled.span`
width:20px;
height:20px;
word-spacing:30px;
margin:0px;
${mobile({fontSize:"7px"})};
`;

const ProductSize=styled.span`
${mobile({fontSize:"7px"})};
`;

const Details=styled.div`
padding:20px;
display:flex;
flex-direction:column;
justify-content:space-around;
`;

const PriceDetail=styled.div`
flex:1;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`;

const ProductAmountContainer = styled.div `
display:flex;
align-items:center;
margin bottom:20px;
${mobile({fontSize:"5px",display:"flex",alignItem:"center", marginRight:"250px",padding:"5px 0px"})};
`;

const ProductAmount= styled.div`
font-size:24px;
margin:5px;
${mobile({margin:"5px 15px", fontSize:"10px"})};
`;

const ProductPrice = styled.span`
font-size:30px;
font-weight:200;
${mobile({fontSize:"15px",display:"flex",alignItem:"center", marginRight:"250px",padding:"5px 0px"})};

`;

const Info= styled.div`
flex:3;
`;

const Summary = styled.div`
flex:1;
background-color:#CCAE88;
border:0.5px solid #3C2218;
border-radius:10px;
padding:20px;
height:50vh;

`;

const SummaryTitle =styled.h1`
font-weight:bold;
${mobile({fontSize:"15px",display:"flex",alignItem:"center"})};
`;
const SummaryItem =styled.div`

margin:30px 0px;
display:flex;
justify-content:space-between;
font-weight:${props=>props.type === "total" && "500"};
font-size: ${props=>props.type === "total" && "24px"};
${mobile({fontSize:"15px",display:"flex",flexDirection:"column",alignItem:"center", marginRight:"250px", width:"100%", height:"100%"})};
`;

const SummaryItemText =styled.span`
`;

const SummaryItemPrice =styled.span`
`;

const SummaryButton =styled.button`
    width:100%;
    padding:10px;
    background-color:#3C2218;
    color:#FFFEF7;
    font-weight:bold;
    ${mobile({fontSize:"10px",padding:"0px 0px", width:"100%", height: "25px", marginRight:"250px"})};

`;



const Cart = () => {
  return (
    <Container>
         <Navbar/>
      <Announcements/>

      <Wrapper>
          <Title>YOUR BASKET</Title>
          <Top>
              <TopButton>CONTINUE SHOPPING</TopButton>
              <TopTexts>
                  <TopText>SHOPPING BASKET(2)</TopText>
                  <TopText>YOUR SAVED LIST(0)</TopText>

              </TopTexts>
              <TopButton type="filled">CHECKOUT NOW</TopButton>
              
          </Top>
          <Bottom>
            <Info>
          
                <Product>
                    <ProductDetail>

                        <Image src="https://img.freepik.com/free-psd/paper-coffee-bag-mockup_35913-1722.jpg?w=740"/>
                        <Details>
                            <ProductName><b>Product:</b>Arabica Beans</ProductName>
                            <ProductId><b>ID:</b>123456</ProductId>
                            <ProductQuality><b>Quality:</b>Premium</ProductQuality>
                            <ProductSize><b>Size:</b> Small</ProductSize>

                        </Details>

                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <Add/>
                            <ProductAmount>1</ProductAmount>
                            <Remove/>
                           </ProductAmountContainer>
                        <ProductPrice>$50.00</ProductPrice>
                    </PriceDetail>

                </Product>
              
              <Hr/>
            
                <Product>
                    <ProductDetail>

                        <Image src="https://img.freepik.com/free-psd/paper-coffee-bag-mockup_35913-1722.jpg?w=740"/>
                        <Details>
                            <ProductName><b>Product:</b>Robusta Beans</ProductName>
                            <ProductId><b>ID:</b>56789</ProductId>
                            <ProductQuality><b>Quality:</b>Premium</ProductQuality>
                            <ProductSize><b>Size:</b> Small</ProductSize>

                        </Details>

                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <Add/>
                            <ProductAmount>1</ProductAmount>
                            <Remove/>
                           </ProductAmountContainer>
                        <ProductPrice>$40.00</ProductPrice>
                    </PriceDetail>

                </Product>
              
                <Hr/>
              
                <Product>
                    <ProductDetail>

                        <Image src="https://img.freepik.com/free-psd/paper-coffee-bag-mockup_35913-1722.jpg?w=740"/>
                        <Details>
                            <ProductName><b>Product:</b>Kenya Beans</ProductName>
                            <ProductId><b>ID:</b>127496</ProductId>
                            <ProductQuality><b>Quality:</b>Premium</ProductQuality>
                            <ProductSize><b>Size:</b> Small</ProductSize>

                        </Details>

                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <Add/>
                            <ProductAmount>1</ProductAmount>
                            <Remove/>
                           </ProductAmountContainer>
                        <ProductPrice>$80.00</ProductPrice>
                    </PriceDetail>

                </Product>
              
                </Info>

              <Summary>
                  <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                  <SummaryItem>
                      <SummaryItemText>Subtotal</SummaryItemText>
                      <SummaryItemPrice>$170.00</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem>
                      <SummaryItemText>Estimate Shipping</SummaryItemText>
                      <SummaryItemPrice>$5.90</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem>
                      <SummaryItemText>Shipping Discount</SummaryItemText>
                      <SummaryItemPrice>-$5.90</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem type="total">
                      <SummaryItemText >Total</SummaryItemText>
                      <SummaryItemPrice>$170.00</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryButton>CHECKOUT NOW</SummaryButton>
              </Summary>
          </Bottom>

      </Wrapper>

      <Footer/>

    </Container>
  );
};

export default Cart