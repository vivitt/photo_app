import { Input, Form, Button  } from '../styledComponents';
import { useState } from 'react';
// import { useUserContext } from '../context/UserContextProv';
import { useNavigate } from 'react-router';
import { useAuth } from '../context/AuthenticationProv';

function Login ({setLogin, login, setRegister}) {
    
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const activeUser = useAuth();
  const navigate = useNavigate();
  const { onLogin } = useAuth();

  function loginUser(event) {
    event.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({email: email, password: password})
      };
      fetch("/auth/login", requestOptions)
        .then ( response => response.json())
        .then(data => {
          activeUser.setAuthData({name: data.name, email: data.email, favs: data.favs})
          onLogin({ email: data.email, name: data.name })
          console.log(activeUser.authData, '---> logged')
          navigate('/user', {replace: true})
          setEmail('');
          setPassword('')})
        .catch(err => console.log(err))
  } 
    
  const handleClick = (e) => {
    e.preventDefault(); 
    setLogin(false); 
    setRegister(true);
    console.log(login)
  }
  return (
    <>
      <Form>
        <h1>Login</h1>
    
        <label for='email'>Email</label> 
        <Input type="email" required name="email" onChange={(event) => setEmail(event.target.value)} id='email' value={email} ></Input>
        <label for='password'>Password</label> 
        <Input type="password" required name="password" onChange={(event) => setPassword(event.target.value)} id='password' value={password} ></Input>
        <Button type='submit' onClick={loginUser}>Submit</Button>
        <p>Not registered yet? Please register <a href='' onClick={handleClick} >here</a> </p>
      </Form>
    
    </>
  )
}

export default Login