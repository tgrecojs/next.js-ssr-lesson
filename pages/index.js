import React from 'react'
import { injectGlobal, hydrate } from 'react-emotion'
import { Wrapper, Content,Footer } from '../styles';
import Panel from '../components/Panel';

if (typeof window !== 'undefined') {
    hydrate(window.__NEXT_DATA__.ids)
}

injectGlobal`
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
