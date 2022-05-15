import styled from "styled-components";

const Container =styled.div`
height:30px;
background-color:#CCAE88;
color:white;
display:flex;
align-items:center;
justify-content:center;
font-size:14px;
font-weight:bold;

`

const Announcements = () => {
  return (
    <Container>
        Welcome to The Coffee Market. Please enjoy our Sales!!
        </Container>
  )
}

export default Announcements