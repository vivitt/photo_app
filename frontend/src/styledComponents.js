import styled from 'styled-components';

export const Wrapper = styled.section`
padding: 4em;
background: #d9a7c7;  /* fallback for old browsers */
background: -webkit-linear-gradient(#fffcdc, #d9a7c7);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(#fffcdc, #d9a7c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;


export const Form = styled.form`
    displaY: flex;
    flex-flow: column;
    justify-content: center;
    aling-items: center;
    width: 200px;
    border: 1px solid black;
    border-radius: 20px;
    padding: 1rem;
    font-size: 0.8rem
    `;
export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: black;
  background: #fffcdc;
  border: none;
  outline: none;
  border-radius: 1px;

`;

export const Button = styled.button`
padding: 0.5em;
margin: 0.5em;
color: black;
background: #fffcdc;
border: none;
outline: none;
border-radius: 1px;
cursor: pointer;

`;

export const LogoutDiv = styled.div`
position: absolute;
top: 0;
right: 0;
`

export const ButtonsDiv = styled.div`
display: flex;
flex-flow: row nowrap;
aling-items: center;
justify-content: center;
margin-top:0.5rem;
`
export const IconButton = styled.button`
padding: 0.5em;

color: black;
background: transparent;
border: none;
outline: none;
border-radius: 1px;
cursor: pointer;

`;

export const Div = styled.div`
displaY: flex;
flex-direction: column;
justify-content: center;
aling-items: center;
width: 300px;
border: 1px solid black;
border-radius: 20px;
padding: 1rem;
margin: 1rem;
`

export const GalleryDiv = styled.div`
displaY: flex;
flex-flow: row wrap;
justify-content: flex-start;
aling-items: center;
width: 300px;
border: 1px solid black;
border-radius: 20px;
padding: 1rem;
margin: 1rem;
`
export const FavDiv = styled.div`
position: relative;
`
export const FavImg = styled.img`
width: 100px;
`
export const DeleteButton = styled.button`
position: absolute;
top: 3px;
right: 0;
color: black;
background: transparent;
border: none;
outline: none;
border-radius: 1px;
cursor: pointer;

`;
export const FooterDiv = styled.div`
font-size: 0.8rem;
display: flex;
justify-content: center;
`