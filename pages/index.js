import React from 'react'
import { injectGlobal } from 'react-emotion'
import { Wrapper, Content,Footer } from '../styles';
import Panel from '../components/Panel';

injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Roboto+Slab');
    body{ 
        color: white;
        margin: 0;
        font-size: 16px;
    }
`;

const App = () =>
    <Wrapper>
        <Content>
            <Panel/>
            <Panel />
        </Content>
        <Footer>I am zee footer</Footer>
    </Wrapper>;

export default App
