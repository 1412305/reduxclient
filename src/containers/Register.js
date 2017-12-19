import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios'

class Register extends React.Component{
    constructor(props) {    
        super(props);       
        this.state = {
            error: {
                username: "",
                password: "",
                retypepassword: ""
            }
        }
      }

    validate(username, password, retypepassword){
        this.setState({
            error: {
                username: (username === undefined) ? "Username is required" : "",
                password: (password === undefined) ? "Password is required" : "",
                retypepassword: (retypepassword === undefined) ? "Retype-password is required" : ""
            }
        })
        
        if (password !== retypepassword)
        {
            this.setState({
                error: {retypepassword: "Retype-password does not match password"}
            })
            return false
        }

        if (username === undefined || password === undefined || retypepassword === undefined)
            return false
        
        return true;
    }

    handleClick(username, password, retypepassword){
       if (this.validate(username, password, retypepassword)){
         var data = {
            username: username, 
            password: password
          }
        
          axios.post('https://luongbuiblockchain.herokapp.com/register', data)
          .then(function(response) {
              alert('Registered successfully!')
          })
          .catch(function(error) {
              alert('Failed');
          });
       }
    }

    render(){
        let username = "";
        let password = "";
        let retypepassword = "";
        return (
            <form>
                <div> 
                    <TextField floatingLabelText="Username" errorText={this.state.error.username} onChange = {(e) => (username = e.target.value)} />
                </div>
                <div> 
                    <TextField floatingLabelText="Password" errorText={this.state.error.password} type="password" onChange = {(e) => (password = e.target.value)} />
                </div>
                <div> 
                    <TextField floatingLabelText="Retype-password"  errorText={this.state.error.retypepassword} type="password" onChange = {(e) => (retypepassword = e.target.value)} />
                </div>
                <RaisedButton label="Register" primary={true} onClick={() => this.handleClick(username, password, retypepassword) } />
            </form>
            )
    }
}

export default Register