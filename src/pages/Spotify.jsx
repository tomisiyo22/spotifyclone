import styled from 'styled-components';
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import SongList from '../components/SongList';
import SpotifySearch from '../components/SpotifySearch';



const Spotify = () => {
    const [currentSong, setCurrentSong] = useState({});


    return (
        <Container>
        <div className='spotifybody'>
        <Sidebar/>
        <div className='body'>
            <div className='bodycontent'>

                <SpotifySearch setCurrentSong={setCurrentSong}/>
                
                {/* <SongList/> */}
            </div>
        </div>
        </div>
        <div className='footer'>
            <Footer title={currentSong.title}
            artist={currentSong.artist}
            imagen={currentSong.imagen}/>

        </div>
        </Container>
    );
};

export default Spotify;

const Container = styled.div`

    max-width:100vw;
    max-height:100vh;
    display:grid;
    grid-template-rows: 85vh 15vh;
    overflow:hidden;
    .spotifybody{
        display:grid;
        grid-template-columns: 30vw 70vw;
        background-color: #121212;
        .body{
            height: 100%;
            width: 100%;
            overflow:hidden;
            
        }

    }

    
`;
