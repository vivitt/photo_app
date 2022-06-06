import { Input, Form, Button } from '../styledComponents';
import { useState } from 'react';

function Register ({setLogin, login, setRegister}) {
    
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    function registerUser(event) {
    event.preventDefault();
    
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({name: name, email: email, password: password})
    };
    fetch("/auth/register", requestOptions)
      .then(response => response.json())
      .then(data => {
        
        setName("");
        setEmail("");
        setPassword("");
        setLogin(true); 
        setRegister(false)
      })
     
    } 
    const handleClick = (e) => {
        e.preventDefault(); 
        setLogin(true); 
        setRegister(false)
        
      }
    
    return (
        <>
      <Form>
        <h1>Register</h1>
        <label for='name'>Name</label> 
        <Input type="text" required name="name" id='name' value={name}onChange={(event) => setName(event.target.value)} ></Input>
        <label for='email'>Email</label> 
        <Input type="email" required name="email" id='email' value={email} onChange={(event) => setEmail(event.target.value)} ></Input>
        <label for='password'>Password</label> 
        <Input type="password" required name="password" id='password' value={password} onChange={(event) => setPassword(event.target.value)} ></Input>
        <Button type='submit' onClick={registerUser} > Submit</Button>
        <p>Already registered? Please login <a  href='/' onClick= {handleClick} >here</a> </p>
      </Form>
    
      </>
    )
}

export default Register