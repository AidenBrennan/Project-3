import styled from "styled-components";
import Navbar from "../component/navbar";
import Announcements from "../component/announcements";
import ProductCat from "../component/productCat";
import Newsletter from "../component/newsLetter";
import Footer from "../component/footer";
import {mobile} from "../responsive";

const Container = styled.div`
`;
const Title = styled.h1`
margin:20px;
`;
const FilterContainer = styled.div` 
display: flex; 
justify-content:space-between;
`;
const Filter = styled.div`
margin:20px;
${mobile({width:"0px 20px", display:"flex", flexDirection:"column"})};
`;

const FilterText = styled.span`
font-size:20px;
font-weight:600;
margin-right:280px;
${mobile({marginRight:"0px"})};
`;

const Select =styled.select`
padding: 10px;
margin-right:20px;
${mobile({margin:"0px 10px"})};
`;

const Option =styled.option`

`;

const ProductList = () => {
  return (
    <Container>
      <Navbar/>
      <Announcements/>
      <Title>Coffee Bean</Title>
       
        <FilterContainer>
          <Filter>
            <FilterText>Filter products:</FilterText>
            <Select>
                <Option disabled selected>
                  Coffee bean
                  </Option>
                <Option>Arabica</Option>
                <Option>Robusta</Option>
               <Option>Kenya</Option>
            </Select>
            <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>Small</Option>
            <Option>Medium</Option>
            <Option>Large</Option>
            </Select>
          </Filter>
          <Filter>
            <FilterText>Sort products:</FilterText>
            <Select>
                <Option selected>
                  Quality
                  </Option>
                <Option>Price (asc)</Option>
                <Option>Strength (desc)</Option>
               </Select>
            </Filter>
        </FilterContainer>
        <ProductCat/>
        <Newsletter/>
        <Footer/>
    </Container>
  );
}

export default ProductList