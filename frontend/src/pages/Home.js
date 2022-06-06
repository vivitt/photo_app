import { useState } from "react";
import Footer from "../components/Footer";
import Login from "../components/Login";
import Register from "../components/Register";

const { Wrapper } = require("../styledComponents");



function Home({login, setLogin, register, setRegister}) {
    
    return (
        <Wrapper>
            {
            (!login) && <Register setLogin={setLogin} login={login} setRegister={setRegister} /> }
            {
            (login) && <Login setLogin={setLogin} login={login} setRegister={setRegister} />
            }
        </Wrapper>
    )
}

export default Home