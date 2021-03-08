import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { Mentor } from '../Mentor';
// import { Mentor } from '../Mentor';
import { Preloader } from '../Layout/Preloader';

const FormGrey = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
`;

const Styleddiv = styled.div`
    min-height: calc(100vh - 70px - 64px);
    padding: 1.5rem 0;
`;

export default function Form() {
    const [name, setName] = useState('');
    // const [surname, setSurname] = useState('');
    // const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    // const onValueChange = (e) => {
    //     setValue([e.target.name], e.target.value);
    // // };
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // const handleLogIn = (e) => {
    //     e.preventDefault();
    //     data.push({
    //         name: name,
    //         password: password,
    //     });
    //     // setIsAuthenticated(true);
    // };
    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     data.push({
    //         name: name,
    //         // surname: surname,
    //         // mail: mail,
    //         password: password,
    //     });
    //     console.log(data);
    // };
    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     api.login(email, password);
    //   };
    // const data = [];
    // const objEnterData = { name: 'max', password: '1234' };
    const handleLogIn = (e) => {
        e.preventDefault();
        const login = 'Maks';
        const password = '1234';
        const objEnterData = { login, password };
        if (objEnterData === users[0]) {
            setIsAuthenticated(true);
        }
    };
    const users = [{ login: 'Maks', password: '1234' }];

    return (
        <Styleddiv>
            <FormGrey onSubmit={handleLogIn}>
                <div>
                    <Input
                        className='userName'
                        type='text'
                        placeholder='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        name='name'
                    />
                </div>
                {/* <div>
                    <Input
                        className='userSurname'
                        type='text'
                        placeholder='surname'
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                        name='surname'
                    />
                </div>
                <div>
                    <Input
                        className='userMail'
                        type='email'
                        placeholder='mail'
                        value={mail}
                        onChange={(e) => setMail(e.target.value)}
                        name='mail'
                    />
                </div> */}
                <div>
                    <Input
                        className='userPassword'
                        type='password'
                        placeholder='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        name='pass'
                    />
                </div>
                <div>
                    <Button type='submit' />
                </div>
                <Router>
                    <Switch>
                        <Route
                            path='/some-path'
                            render={() =>
                                !isAuthenticated ? (
                                    <Mentor />
                                ) : (
                                    <Preloader to='/preloader' />
                                )
                            }
                        />
                    </Switch>
                </Router>
                {/* <ComponentChild isAuthenticated={isAuthenticated} /> */}
            </FormGrey>
        </Styleddiv>
    );
}
