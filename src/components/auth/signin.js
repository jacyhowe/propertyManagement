import React, { Component } from 'react';
import { FormTitle } from '../formTitle';

class Signin extends Component {
    render() {
        return (
            <div className="signin">
              <FormTitle className="sign-in__title" text="Login"/>
            </div>
        )
    }
}
export default Signin;