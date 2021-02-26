import React, {useState} from 'react';
import styled from 'styled-components';
import SendIcon from '@material-ui/icons/Send';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicTwoToneIcon from '@material-ui/icons/FormatItalicTwoTone';
import StrikethroughSTwoToneIcon from '@material-ui/icons/StrikethroughSTwoTone';
import CodeIcon from '@material-ui/icons/Code';
import LinkIcon from '@material-ui/icons/Link';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import FontDownloadIcon from '@material-ui/icons/FontDownload';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import {Button} from '@material-ui/core';

function ChatInput({ sendMessage }) {
    const [input, setInput] = useState("");
    const send = (e) => {
        e.preventDefault();
        if(!input) return;
        sendMessage(input)
    }
    return (
        <Container>
            <InputContainer>
                <form>
                    <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder="Message here..."/>
                    <SendButton onClick={send} type="submit">
                        <Send/>
                       
                    </SendButton>
                </form>
                <TextFormat>
                        <Left>
                            <FormatBoldIcon id="fBI"/>
                            <FormatItalicTwoToneIcon id="fiI"/>
                            <StrikethroughSTwoToneIcon id="stI"/>
                            <CodeIcon id="cI"/>
                            <LinkIcon/>
                            <FormatListBulletedIcon/>
                        </Left>
                       
                        <Right>
                            <FontDownloadIcon/>
                            <AlternateEmailIcon/>
                            <EmojiEmotionsOutlinedIcon/>
                            <AttachFileOutlinedIcon/>
                        </Right>
                </TextFormat>
            </InputContainer>
        </Container>
    )
}

export default ChatInput

const Container = styled.div`
::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey; 
    border-radius: 10px;
  }
   
    padding: 0 20px;
    padding-bottom: 24px;
    #lightBtn, darkBtn {
        margin: 0 1rem;
    }
  #darkBtn {
      background: #333;
      color: #f4f4f4
  }
  #lightBtn  {
      background: #f4f4f4;
      color: #333;
  }
   
`;

const InputContainer = styled.div`
    border: 1px solid #8D8D8E;
    form {
        display:flex;
        height: 42px;
        align-items: center;
        padding-left: 10px;;
        input {
            flex: 1;
            border: none;
            font-size: 13px;
            background: rgba(0, 0, 0, 0);
            color: #f4f4f4;
            
        }
        input:focus {
            outline:none
        }
    }
`;
const SendButton = styled.button`
background: #007a5a;
border-radius: 2px;
width: 32px;
height: 32px;
display: flex;
align-items: center;
justify-content: center;
margin-right: 5px;
cursor: pointer;
border: none;
.MuiSvgIcon-root {
    width: 18px;
}

`;

const Send = styled(SendIcon)`
    color: #D9D9D9;
`;

const TextFormat = styled.div`
height: 40px;
border-top: 1px solid #8D8D8E;
display: flex;
justify-content: space-between;
align-items: center;
`;

const Left = styled.div`
    font-weight: 400;
    color: white;
`;

const Right = styled.div`
font-weight: 400;
color: white;
`;