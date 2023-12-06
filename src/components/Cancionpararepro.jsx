import React from 'react';
import styled from 'styled-components';
import imagen from "../assets/beatles.jpg"

const Cancionpararepro = () => {
    return (
        <Container>
            <div className='responMenu'></div>
            <div className='track'>
                <div className='contentimage'>
                    <img src={imagen}/>
                    </div>
                    <div className='info'>
                        <h4 className='name'>Let it be
                        </h4>
                        <h6 className='autor'>The Beatles</h6>

                    </div>
            </div>
            
        </Container>
    );
};

export default Cancionpararepro;

const Container = styled.div`
  .track {
    display: flex;
    align-items: center;
    gap: 1rem;
    .contentimage {
      img {
        width: 120px;
      }
    }
    .info {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      .name {
        color: white;
      }
      .autor {
        color: #b3b3b3;
      }
    }
  }
`;