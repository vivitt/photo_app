import { useUserContext } from "../context/UserContextProv";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { Div, ButtonsDiv, LogoutDiv } from "../styledComponents";

import { useAuth } from "../context/AuthenticationProv";
import { GalleryDiv } from "../styledComponents"
import Thumb from "../components/Thumb";

function User() {
    const { Wrapper } = require("../styledComponents");
    const { IconButton } = require("../styledComponents");
    const [photo, setPhoto] = useState({}); //current photo 
    const [photoUrl, setPhotoUrl] = useState(''); //url for photo added to favs
    const [photoId, setPhotoId] = useState(''); //photo id to send to backend

    const navigate = useNavigate();
    
    //user context
    let { authData } = useAuth();
    let { setAuthData } = useAuth();
    //UserName first letter capital
    const userName = authData.name.charAt(0).toUpperCase() + authData.name.slice(1);
   
    const favsForUser = authData.favs;  //photo ids favs from backend
    
 
    const [ userFavs, setUserFavs ] = useState([]);    //urls favs photos
    const [ showFavs, setShowFavs ] = useState(false);  //set view favs
  
    
    const clientId = `${process.env.REACT_APP_CLIENT_ID}` //apikey
    
    //get a random image
    const getPhotos = () => {
    let url = `https://api.unsplash.com/photos/random?collections=6820865&client_id=${clientId}`
        fetch (url)
            .then (response => response.json())
            .then (data => {
                setPhoto(data)  
                setPhotoId(data.id)
                setPhotoUrl(data.urls.small)
        })
            .catch(err => console.log(err))
        }

    useEffect(() => {
        getPhotos();
        
       }, [])
    //unlike image   
    function handleUnlike (e) {
        e.preventDefault()
        getPhotos();
        console.log('favsforuser', favsForUser)
        console.log('userfavs' , userFavs)
    }
    //like image
    function handleLike (event) {
        event.preventDefault();
        
        const check = userFavs.some((item) => item.url === photoUrl)
        if (!check) setUserFavs([{url: photoUrl, id: photoId}, ...userFavs]);
        const requestOptions = {
            method: 'POST',
            credentials: "include",
            headers: { 'Content-Type': 'application/json' },
        };
        fetch(`user/add/${photo.id}`, requestOptions)
            .then(res =>res.json())
            .then(data => {
                console.log('added', data);
                navigate('/user');
                getPhotos();
                
            })
            favsForUser.push(photo.id)
            .catch(error => console.log(error))
        
    }
    //toggle view user favs
    const showUserFavs = (e) => { 
        e.preventDefault();     // getUserFavs();       
        if (showFavs === false) {          
            setShowFavs(true)      
        } else { setShowFavs(false) 
        }
    }
    
    //end session
    function logoutUser(event) {
            event.preventDefault();
            const requestOptions = {
                method: 'GET',
                credentials: "include",
                headers: { 'Content-Type': 'application/json'},
            
            };
        
            fetch('/auth/logout', requestOptions)
            .then(res => {if (res.status === 200) {console.log('session ended!')
            navigate('/', {replace:true})
            setAuthData({name:"", email: ""})}})
            .catch(error => console.log(error))
        }
    
    return (
        <Wrapper>
            <LogoutDiv>
            <IconButton onClick={logoutUser}><i class="fa-solid fa-arrow-right-from-bracket"></i></IconButton>
            </LogoutDiv>
            <h1>Hi, {userName}</h1>
            <Div>
            <img src={photoUrl}></img>
            <ButtonsDiv>
            <IconButton onClick={handleUnlike}><i class="fa-solid fa-ban"></i></IconButton>
            <IconButton onClick={handleLike}><i class="fa-solid fa-heart"></i></IconButton>
            </ButtonsDiv>
            </Div>
            <IconButton onClick={showUserFavs}><i class="fa-solid fa-eye"></i></IconButton>
            { (showFavs === true ) &&
            
            <GalleryDiv>
            {
            (userFavs.length < 1) ?<p>Nothing here yet...</p>
            :<>{userFavs.map(item => (<Thumb item={item} userFavs={userFavs} setUserFavs={setUserFavs} />)) } </>
    
            }
        </GalleryDiv>
            }
        </Wrapper>
    )
}

export default User