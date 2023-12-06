import React from 'react';
import styled from 'styled-components';
import logoSp from "../assets/spotify-1024x538.png"
import Btntipologin from '../components/Btntipologin';


const Login = () => {

    const ingresar = async()=> {
      const client_id="0f4ad708bee942cfbaa65780f00d5635";
      const uri_redireccion= "http://localhost:5174/";
      const api_uri="https://accounts.spotify.com/authorize";
      const respuesta= [
        "user-read-playback-state",
        "playlist-read-private",
        "user-read-email",
        "user-read-private"

      ]
      window.location.href=`${api_uri}?
      client_id=${client_id}&redirect_uri=${uri_redireccion}&
      scope=${respuesta.join(

      )}&response_type=token&
      show_dialog=true`

    }; 

    return (
        <>
          <Container>
          <img src={logoSp}/>
          <button onClick={ingresar}>Login</button>
          </Container>
        </>
    );
};

export default Login;

const Container = styled.div`
display:flex;
img{
  width: 200px;
}


`
