import styled from 'styled-components';
import React from 'react';
import logo2 from "../assets/whitespoti.png";
import { TiHome } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";
import { BiLibrary } from "react-icons/bi";

const Sidebar = () => {
    return (
        <Container>
            <div className='subcontainertop'>
                <div className='logo'>
                    <img src={logo2} alt="logospotify" />
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
                    <li>
                        <BiLibrary />
                        <span>Crear playlist</span>
                    </li>
                    <li>
                        <BiLibrary />
                        <span>Tus me gusta</span>
                    </li>
                </ul>
            </div>
        </Container>
    );
};

export default Sidebar;

const Container = styled.div`
  background: linear-gradient(to bottom, #040404, #000000);
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 240px; /* Ajusta el ancho según tus necesidades */
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
        font-family:
        CircularSp, CircularSp-Arab, CircularSp-Hebr, CircularSp-Cyrl, CircularSp-Grek, CircularSp-Deva, "Helvetica Neue", helvetica, arial, "Hiragino Kaku Gothic ProN", Meiryo, "MS Gothic"
        font-size: 16px;
        font-weight: 600;
        line-height: normal;
        letter-spacing: normal;
        color: #b3b3b3;
        
      }
    }
  }
`;