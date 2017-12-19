import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types'

const Login = ({onClick}) => {
    let username
    let password
    return (<form>
        <div> 
            <TextField floatingLabelText="Username" onChange={(e) => (username = e.target.value)}/>
        </div>
        <div> 
            <TextField floatingLabelText="Password" type="password"  onChange={(e) => (password = e.target.value)} />
        </div>
        <RaisedButton label="Login" primary={true} onClick={() => onClick(username, password)}/>
    </form>)
}

Login.propTypes = {
    onClick: PropTypes.func.isRequired,

}

export default Login