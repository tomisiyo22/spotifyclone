import { useState } from 'react';
import styled from 'styled-components';
import { CgPlayButtonO } from 'react-icons/cg';




const StyledContainer = styled.div`
  text-align: center;
  padding: 20px;
`;


const StyledForm = styled.form`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const StyledInput = styled.input`
  background-color: #121212;
  border: 1px solid #1db954;
  border-radius: 500px;
  color: #fff !important;
  height: 24px; 
  padding: 6px 12px; 
  width: 40%; 
  margin-right: 10px;
  margin-left: 10px; 
`;


const StyledSongContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-height: 60vh;
  overflow-y: auto;
`;

const StyledSong = styled.div`
  width: 200px;
  margin: 10px;
  text-align: center;
  background-color: #181818;
  padding: 16px;
  border-radius: 8px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const StyledSongImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const StyledSongTitle = styled.h2`
  margin-top: 10px;
  color: #fff;
  font-size: 14px;
`;

const StyledPlayButton = styled.button`
  margin-top: 5px;
  padding: 6px;
  cursor: pointer;
  background-color: #1db954;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 12px;
`;

const App = () => {
  const [cancion, setCancion] = useState('');
  const [canciones, setCanciones] = useState([]);

  const handleSearch = async (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (cancion.trim() === '') {
        alert('Debes ingresar algo');
        return;
      }
      setCancion('');
      await getSong(cancion);
    }
  };

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'baaffaef41msh3e4638ecc147a63p1c1ec6jsnd0d700e63d74',
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
    },
  };

  const getSong = async (cancion) => {
    try {
      const url = `https://spotify23.p.rapidapi.com/search/?q=${cancion}&type=multi&offset=0&limit=20&numberOfTopResults=5`;
      const data = await fetch(url, options);
      const res = await data.json();
      setCanciones(res.tracks.items);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  return (
    <StyledContainer>
  
      <StyledForm>
        <StyledInput
          type='text'
          value={cancion}
          onChange={(e) => setCancion(e.target.value)}
          onKeyPress={handleSearch}
          placeholder='¿Qué te apetece escuchar?'
        />
      </StyledForm>
      <StyledSongContainer>
        {canciones.map((cancion, index) => (
          <StyledSong key={index}>
            <StyledSongImage src={cancion.data.albumOfTrack.coverArt.sources[0].url} alt='' />
            <StyledSongTitle>{cancion.data.name}</StyledSongTitle>
            <a href={cancion.data.uri}>
              <StyledPlayButton>
                Play song <CgPlayButtonO className='botonPlay' />
              </StyledPlayButton>
            </a>
          </StyledSong>
        ))}
      </StyledSongContainer>
    </StyledContainer>
  );
};

export default App;