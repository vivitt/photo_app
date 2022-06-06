import './App.css';
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes
} from "react-router-dom";
import AuthenticationProv from './context/AuthenticationProv';
import { useUserContext } from './context/UserContextProv';
import UserContextProv from './context/UserContextProv';
import { useState } from 'react';
import Footer from './components/Footer';
import RequireAuth from './context/RequireAuth';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import User from './pages/User';
import { useLoader } from './context/LoadContext';
import Spinner from './components/Spinner';

function App() {
  // const activeUser = useUserContext();
  // console.log('active user:', activeUser)
  const [ login, setLogin ] = useState(true);
  const [ register, setRegister ] = useState(false);
  const  {isLoading } = useLoader();

  return (
    
    <AuthenticationProv>
      <UserContextProv >
       {isLoading ? (
          <Spinner color={'#d9a7c7'}></Spinner>
        ) : (
    
    <div className="app">
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<Home setLogin={setLogin} login={login} register={setRegister} setRegister={setRegister} />} /> 
            
            <Route path="/user" element={ <RequireAuth> <User /> </RequireAuth> } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main> 
      </Router>
      <Footer text={'© Viviana Yanez 2022 | Made with ♥︎ '}/>
    </div>
      
     
  
        )}
          </UserContextProv>
    </AuthenticationProv>
  );



}

export default App;
