import styled from "styled-components";
import {mobile} from "../responsive"

const Container =styled.div`
height:30px;
background-color:#CCAE88;
color:white;
display:flex;
align-items:center;
justify-content:center;
font-size:14px;
font-weight:bold;
${mobile({display:"none"})};
`

const Announcements = () => {
  return (
    <Container>
        Welcome to The Coffee Market. Please enjoy our Sales!!
        </Container>
  )
}

export default Announcements