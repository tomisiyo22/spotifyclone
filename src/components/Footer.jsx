import React from 'react';
import styled from 'styled-components';
import Playercontrols from './Playercontrols';
import Cancionpararepro from './Cancionpararepro';

const Footer = ({title, imagen, artist}) => {
    return (
        <Container>
            <Cancionpararepro title={title}
            artist={artist}
            imagen={imagen} />
            <Playercontrols />
            <VolumenContainer>
                <h1>Volumen</h1>
                <input type="range" min="0" max="100" defaultValue="50" />
            </VolumenContainer>
        </Container>
    );
};

export default Footer;

const Container = styled.div`
  color: white;
  height: 150px; /* Ajusta la altura según tus necesidades */
  width: 100%;
  background-color: #181818;
  border-top: 1px solid #282828;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  transition: background-color 0.3s ease; /* Efecto de transición al pasar el mouse */
  &:hover {
    background-color: #282828;
  }
`;

const VolumenContainer = styled.div`
  display: flex;
  align-items: center;
  h1 {
    font-size: 14px;
    margin-right: 8px;
  }
  input {
    width: 100px;
  }
`;