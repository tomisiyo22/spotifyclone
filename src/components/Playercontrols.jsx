import React, { useState } from 'react';
import styled from 'styled-components';
import { CgPlayTrackNext, CgPlayTrackPrev } from "react-icons/cg";
import { BsPlayCircleFill, BsStopCircle } from "react-icons/bs";  
import { FiRepeat } from "react-icons/fi";
import { BsShuffle } from "react-icons/bs";

const Playercontrols = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    
    setIsPlaying(!isPlaying);

   
  };

  return (
    <Container>
      <IconButton className="aleatorio" title="Reproducción aleatoria">
        <BsShuffle />
      </IconButton>
      <IconButton className="previous" title="Anterior">
        <CgPlayTrackPrev />
      </IconButton>
      <PlayButton className="state" title="Reproducir" onClick={togglePlay}>
        {isPlaying ? <BsStopCircle /> : <BsPlayCircleFill />}
      </PlayButton>
      <IconButton className="next" title="Siguiente">
        <CgPlayTrackNext />
      </IconButton>
      <IconButton className="repeat" title="Repetir">
        <FiRepeat />
      </IconButton>
    </Container>
  );
};

export default Playercontrols;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const IconButton = styled.div`
  font-size: 2rem;
  color: #b3b3b3; 
  cursor: pointer;
  transition: color 0.3s ease, transform 0.2s ease;

  &:hover {
    color: #1db954; 
    transform: scale(1.2); 
  }
`;

const PlayButton = styled(IconButton)`
  font-size: 2.5rem;
  color: #1db954; /
  transition: color 0.3s ease, transform 0.2s ease;

  &:hover {
    color: #fff; 
  }
`;