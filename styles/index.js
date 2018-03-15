import styled from 'react-emotion';

const Wrapper = styled.div`
margin: 0;
background:#041E42;
display: flex;
color: #;
min-height: 100vh;
font-family: 'Roboto Slab';
flex-direction: column;
`;
const Content = styled.div`
flex: 1;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
`;

const PanelButton = styled.button`
    background: #041E42;
    height: 50px;
    font-family: "Roboto Slab";
    width: 80%;
    margin: 8px;
    color: white;
    font-size: 20px;
    border-radius: 5px;
    transition: all .3s ease-in-out;
    &:hover {
        transform: scale(1.1);
    }
`

const PanelText = styled.p`
    line-height: 1.4;
    padding: 10px;
`;

const Panel = styled.div`
margin-top: 10px;
background: #003594;
display: flex;
flex-direction: column;
align-items: center;
width: 350px;
justify-content: space-around;
height: 350px;
border-radius: 5px;
`;

const PanelTitle = styled.h2`
  margin: 10px;
  padding: 10px;
`;
const Footer = styled.footer`
    text-align: center;
    background: #003594;
    height: 50px;
    color: white; 
`
export { Wrapper, Content, Panel, PanelTitle, PanelText, PanelButton, Footer }