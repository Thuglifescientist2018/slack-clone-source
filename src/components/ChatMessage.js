import React from 'react'
import styled from 'styled-components'

function ChatMessage({text, name, image, timestamp}) {
    return (
        <Container>
           <UserAvatar>
               <img src={image} alt=""/>
           </UserAvatar>
           <MessageContent>
               <Name>
                {name}
               <span>{new Date(timestamp.toDate()).toUTCString()}</span>
                </Name>
               <Text>
        	       {text}
               </Text>
           </MessageContent>
        </Container>
    )
}

export default ChatMessage

const Container = styled.div`
    padding: 8px 20px;
    margin: 20px 0;
    display:flex;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    span {
        color: #ddd !important; 
    }
    transition: background 0.5s;
    cursor: pointer;
    border-bottom-right-radius: 90px;
    border-top-left-radius: 90px ;
    &:hover {
        background: rgba(55, 55, 55, 0.8);
        box-shadow: inset -2px -2px 5px rgb(100, 100, 100);
        color: #ddd;
    }
`;



const UserAvatar = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 2px;
    overflow: hidden;
    margin-right:  8px;
    img {
        width: 100%;
    }
`;

const MessageContent = styled.div`
 display: flex;
 flex-direction: column;

 
`;

const Name = styled.span`
    font-weight: 900;
    font-size: 15px;
    line-height: 1.4;
    span {
        margin-left: 8px;
        font-weight: 400;
        color: rgb(97, 96, 97);
        font-size; 15px;
    }
`;

const Text = styled.span``;