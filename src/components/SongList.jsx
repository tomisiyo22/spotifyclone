import React from 'react';
import Song from './Song';
import songsData from '../data/songs.json';
import styled from 'styled-components';

const SongList = () => {
  return (
  
    <div className="song-list">
    <SongListContainer>
      {songsData.map((song) => (
        <Song
          key={song.id}
          title={song.title}
          artist={song.artist}
          duration={song.duration}
          image={song.image} className="song-image"
        />
      ))}
       </SongListContainer>
    </div>
    
  );
};

export default SongList;

const SongListContainer = styled.div`
  display: flex;
  gap: 16px; 
`;
