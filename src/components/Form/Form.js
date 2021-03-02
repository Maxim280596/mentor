import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Input from '../Input/Input';
import Button from '../Button/Button';

const FormGrey = styled.form `
display: flex;
flex-direction: column;
align-items: center;
margin-top: 200px;
`

const data = [];

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname:'',
            mail:'',
            pass:''
        }
        this.nameRef = React.createRef();
        
        this.onValueChange= this.onValueChange.bind(this);
        this.onValueChangeSurname= this.onValueChangeSurname.bind(this);
        this.handleEmailChange= this.handleEmailChange.bind(this);
        this.handlePasswordChange= this.handlePasswordChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        
        
    }
    

    onValueChange(e) {
        this.setState({name: e.target.value})
         
    }
    onValueChangeSurname(e) {
        this.setState({surname: e.target.value})

        
    }
    handleEmailChange(e) {
        this.setState({mail: e.target.value});
     }
     handlePasswordChange(e) {
        this.setState({pass: e.target.value});
     }
     
    onSubmit(e) {
        if (this.state.name.lenght < 2 ) {
            alert('Введите полное имя!')
        }else if (this.state.surname.length < 2) {
            alert('Введите полную фамилию!')
        }else {
            e.preventDefault()
        data.push(this.state)
        console.log(data) 
        }
               
    }
    componentDidMount() {
        this.firstNameRef.current.focus();
    }
    
    
   


    render() {
            return(
                <Fragment>
                <FormGrey 
                    onSubmit={this.onSubmit}>
                    <div>
                        <Input className="userName" 
                               type="text" 
                               placeholder="name"
                               value={this.state.name}
                               onChange={this.onValueChange}
                               ref={this.firstNameRef}
                               
                               
                               
                               />
                               
                    </div>
                    <div>
                        <Input className="userSurname" 
                                type="text" 
                                placeholder="surname"
                                value={this.state.surname}
                                onChange={this.onValueChangeSurname}
                                />
                    </div>
                    <div>
                        <Input  
                            className="userMail" 
                            type="email" 
                            placeholder="mail"
                            value={this.state.mail}
                            onChange={this.handleEmailChange}
                            />
                    </div>
                    <div>
                        <Input 
                            className="userPassword" 
                            type="password" 
                            placeholder="password"
                            value={this.state.pass}
                            onChange={this.handlePasswordChange}
                            />
                    </div>
                    <div>
                        <Button 
                        type="submit"/>
                    </div>
                </FormGrey>
                </Fragment>
            )
        
    }
}



