import React from 'react';
import Form from './components/Form/Form';
import styled from 'styled-components';


const AppBlock = styled.div`
    text-align: center;
    margin : 0 auto;
    
   
   
`



const App = () => {
  return (
    <AppBlock>
     <Form/>
    </AppBlock>
  );
}

export default App;
