import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Form from './components/Form/Form';
import styled from 'styled-components';
import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';

import { Mentor } from './components/Mentor';
const StyledContainer = styled.main`
    min-height: calc(100vh - 70px - 64px);
    padding: 1.5rem 0;
`;

const App = () => {
    return (
        <>
            <Router>
                <Header />
                <StyledContainer className='container'>
                    <Switch>
                        <Route exact path='/' component={Form} />

                        <Route exact path='/mentor' component={Mentor} />
                    </Switch>
                </StyledContainer>
                <Footer />
            </Router>
        </>
    );
};

export default App;
