import { FavDiv } from "../styledComponents"
import { DeleteButton } from "../styledComponents"
import { FavImg } from "../styledComponents"
import { useNavigate } from "react-router"

const Thumb = ({item, userFavs, setUserFavs}) => {
    const navigate = useNavigate();
    
    const deleteFav = (event) => {
        event.preventDefault();
        setUserFavs(userFavs.filter((i) => ( i !== item)))
        
        const photoId = (item.id)
        const requestOptions = {
            method: 'POST',
            credentials: "include",
            headers: { 'Content-Type': 'application/json' },
        };
        fetch(`user/remove/${photoId}`, requestOptions)
            .then(res =>res.json())
            .then(data => {
                
                navigate('/user');
                
            })
            
            .catch(error => console.log(error))
    }
    return (
        <FavDiv > 
            {(item.url)   && <DeleteButton onClick={deleteFav}><i class="fa-solid fa-x"></i></DeleteButton> }
            <FavImg src={item.url} /> 
        </FavDiv>
    )
}

export default Thumb