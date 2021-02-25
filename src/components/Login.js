import React from 'react';
import styled from 'styled-components';
import {Button} from '@material-ui/core';
import {Link} from 'react-router-dom';
import mp3_file from './numb.mp3';

function Login() {
    return (
        <Container>
            <div className="container">
            <h1>The Login Page Is Under Construction</h1>
            <h4>Listen to this awesome music</h4>
            <audio src={mp3_file} autoplay controls style={{outline: "none"}}></audio>
                <h4>Or</h4>
                <Link to="room">
            <Button variant="contained" color="primary" class="btn btn-dark">Join Anonymous Chat</Button>

                </Link>

            </div>
        </Container>
    )
}

export default Login


const Container = styled.section`
background: url('https://source.unsplash.com/in9-n0JwgZ0/1920x1080') no-repeat center center/cover;
display: flex;
justify-content: center;
align-items: center;

     .container {
         font-family: 'Advent Pro', sans-serif;
         display: flex; 
         justify-content: center;
         align-items: center;
         flex-direction: column;
        background-color: rgba(0, 0, 0, 0.5);
        box-shadow: inset 5px 5px 10px #F8E6F4;
         color: white;
         padding: 1rem 2rem;
         border-radius: 90px;

     }

`;

