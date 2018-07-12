import React, { Component } from 'react';

import SigninForm from './signinForm';

class Signin extends Component {
    render() {
        return (
            <div className="signin">            
              <SigninForm/>
            </div>
        )
    }
}
export default Signin;