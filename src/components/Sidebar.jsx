import styled from 'styled-components';
import React, { useState } from 'react';
import logo2 from '../assets/whitespoti.png';
import { TiHome } from 'react-icons/ti';
import { CiSearch } from 'react-icons/ci';
import { BiLibrary } from 'react-icons/bi';
import Beatles from '../assets/beatles.jpg'
import petshotboys from '../assets/petshotboys.jfif'

const Sidebar = () => {
  const [playlist, setPlaylist] = useState([]);
  const [isPlaylistOpen, setIsPlaylistOpen] = useState(false);

  const handleCreatePlaylist = () => {
    // Hardcodea las canciones aquí
    const hardcodedSongs = [
      { id: 1, title: 'Let it be', artist: 'The Beatles', image: Beatles, },
      { id: 2, title: 'West End Girls', artist: 'Pet Shop Boys', image: petshotboys },
      // Agrega más canciones según sea necesario
    ];

    setPlaylist(hardcodedSongs);
    setIsPlaylistOpen(true);
  };

  const handleClosePlaylist = () => {
    setIsPlaylistOpen(false);
  };

  return (
    <Container>
      <div className='subcontainertop'>
        <div className='logo'>
          <img src={logo2} alt='logospotify' />
        </div>
        <ul>
          <li>
            <TiHome />
            <span>Inicio</span>
          </li>
          <li>
            <CiSearch />
            <span>Buscar</span>
          </li>
          <li>
            <BiLibrary />
            <span>Tu Biblioteca</span>
          </li>
          <li onClick={handleCreatePlaylist}>
            <BiLibrary />
            <span>Crear playlist</span>
          </li>
          <li>
            <BiLibrary />
            <span>Tus me gusta</span>
          </li>
        </ul>
      </div>
      {/* Muestra las canciones si la lista de reproducción está llena y está abierta */}
      {playlist.length > 0 && isPlaylistOpen && (
        <div className='playlist-container'>
          <PlaylistTitle>¡Esta es tu playlist actual, Tomás!</PlaylistTitle>
          <ul>
            {playlist.map((song) => (
              <li key={song.id}>
                <Card>
                <img src={song.image} alt={`${song.title} cover`} />
                  <p>{song.title}</p>
                  <p>{song.artist}</p>
                </Card>
              </li>
            ))}
          </ul>
          <CloseButton onClick={handleClosePlaylist}>Cerrar</CloseButton>
        </div>
      )}
    </Container>
  );
};

const PlaylistTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  text-align: center; 
  color: #b3b3b3; 
  letter-spacing: -0.04em;
  font-family: 'CircularSp', 'Helvetica Neue', helvetica, arial, "Hiragino Kaku Gothic ProN", Meiryo, "MS Gothic";
  &:hover {
    color: #1db954; 
`;
const Container = styled.div`
  background: linear-gradient(to bottom, #040404, #000000);
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 240px;
  color: white;

  .subcontainertop {
    display: flex;
    flex-direction: column;
    padding: 20px;

    .logo {
      text-align: center;

      img {
        max-width: 80%;
      }
    }
  }

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;

    li {
      display: flex;
      align-items: center;
      gap: 1rem;
      cursor: pointer;
      padding: 8px;
      border-radius: 4px;

      &:hover {
        background-color: #282828;
        color: #1db954;
      }

      svg {
        font-size: 20px;
      }

      span {
        font-family: 'CircularSp', 'CircularSp-Arab', 'CircularSp-Hebr', 'CircularSp-Cyrl', 'CircularSp-Grek', 'CircularSp-Deva', 'Helvetica Neue', helvetica, arial, 'Hiragino Kaku Gothic ProN', Meiryo, 'MS Gothic';
        font-size: 16px;
        font-weight: 600;
        line-height: normal;
        letter-spacing: normal;
        color: #b3b3b3;
      }
    }
  }

  .playlist-container {
    color: white;
    margin-top: 20px;

    ul {
      list-style-type: none;
      padding: 0;

      li {
        margin-bottom: 8px;
      }
    }
  }
  overflow-y: auto; 
  scrollbar-width: thin; 
  scrollbar-color: #282828 #121212; 
  &::-webkit-scrollbar {
    width: 8px; 
  }
  &::-webkit-scrollbar-thumb {
    background-color: #282828; 
  }
`;

const Card = styled.div`
  background-color: #282828;
  padding: 10px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  p {
    margin: 0;
  }

  img {
    width: 100%;
    border-radius: 8px;
  }
`;

const CloseButton = styled.button`
  margin-top: 10px;
  background-color: #1db954;
  color: white;
  border: none;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
`;

export default Sidebar;