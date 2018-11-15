import React, { Component } from 'react';
import axios from 'axios';

import GlobalHeader from '../../components/GlobalHeaderComponent';
import { FirstNameFieldComponent, LastNameFieldComponent, EmailFieldComponent, UsernameFieldComponent, PasswordFieldComponent, AddressFieldComponent } from '../../components/InputComponents';
import { GetStartedButtonComponent } from '../../components/ButtonComponents';

import './NewUser.css';

class NewUser extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            
        }
    }

    render() {
        return (
            <div className="wrapper">
                <GlobalHeader />  
                <h1>HAVE YOU EATEN? 
                    <br />
                    LOG IN
                </h1>
                <div className="NewUser-Container">
                    <div className="User-Fields">
                        <FirstNameFieldComponent />
                        <LastNameFieldComponent />    
                        <EmailFieldComponent />
                        <UsernameFieldComponent />
                        <PasswordFieldComponent />
                    </div>  
                    <div className="Address-Fields">
                        <AddressFieldComponent />
                    </div>
                </div>
                <GetStartedButtonComponent/>
            </div>
        )
    }
}

export default NewUser;

