import React from 'react';
import styled from 'styled-components';

const Song = ({ title, artist, duration, image }) => {
    return (
        <SongCard>
            <img src={image} alt={`Portada de ${title}`} />
            <SongInfo>
                <h3>{title}</h3>
                <p>{artist}</p>
                <p>{duration}</p>
            </SongInfo>
        </SongCard>
    );
};

export default Song;

const SongCard = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: #181818; 
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  margin-bottom: 16px;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #282828; 
    transform: translateY(-2px); 
  }

  img {
    width: 100px;
    height: 100px;
    border-radius: 4px;
    margin-right: 16px;
  }
`;

const SongInfo = styled.div`
  flex: 1;

  h3 {
    font-size: 1.1rem;
    margin-bottom: 4px;
    color: #fff; 
  }

  p {
    font-size: 0.8rem;
    color: #b3b3b3; 
  }
`;