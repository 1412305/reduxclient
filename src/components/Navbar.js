import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const buttonStyle = {
    backgroundColor: 'transparent',
    color: 'white'
  }

const RightElement = ({isLogged}) => {
    const LoginButton = (isLogged) ? <FlatButton label="Logout" style={buttonStyle} containerElement={<Link to='/login'></Link>}/> : <FlatButton label="Login" style={buttonStyle} containerElement={<Link to='/login'></Link>}/>
    return( <span>
         {LoginButton}
        <FlatButton label="Register" style={buttonStyle} containerElement={<Link to='/register'></Link>} />
    </span>
    );
}

const Navbar = ({isLogged}) => (
    <AppBar
        title={ <FlatButton label="Blockchain" style={buttonStyle} containerElement={<Link to='/dashboard'></Link>}/>}
        showMenuIconButton = {false}
        iconElementRight= {<RightElement isLogged = {isLogged} />} />
        
)

Navbar.propTypes = {
    isLogged: PropTypes.bool.isRequired
}

export default Navbar