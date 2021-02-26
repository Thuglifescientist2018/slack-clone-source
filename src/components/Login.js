import React from 'react';
import styled from 'styled-components';
import {Button} from '@material-ui/core';
import {Link} from 'react-router-dom';
import { auth, provider } from  '../firebase';
import mp3_file from  './numb.mp3';

function Login(props) {
    const  signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            const newUser = {
                name: result.user.displayName,
                photo: result.user.photoURL,
            }
            localStorage.setItem('user', JSON.stringify(newUser));
            props.setUser(newUser);
        })
        .catch((error) => {
            alert(error.message)  
        })
    }
    return (
        <Container>
            <div className="container">
                <Content>
                    <SlackImg src="http://assets.stickpng.com/images/5cb480cd5f1b6d3fbadece79.png"/>
                    <h1>Sign In To Slack</h1>
                    <p>While Listen to this Awesome song</p>
                    <audio src={mp3_file} controls style={{outline: "none", opacity: "0.8"}}></audio>
                    <SignInButton onClick={()=>signIn()}>
                        Sign In With Google
                    </SignInButton>
                </Content>
                

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
height: 100vh;
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
const Content = styled.div`
display: flex;
flex-direction: column;
justify-content: center; 
align-items: center;
`;
const SlackImg = styled.img`
     height: 100px;
`;

const SignInButton = styled.button`
        margin-top:50px;
        background-color: #0a8d48;
        color: white;
        border: none;
        height: 40px;
        border-radius: 4px;
        cursor: pointer;
        font-size:15px;
`;