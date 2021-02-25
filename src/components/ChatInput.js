import React from 'react'
import styled from 'styled-components'
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

function ChatInput() {
    return (
        <Container>
            <InputContainer>
                <form>
                    <input type="text" placeholder="Message here..."/>
                    <SendButton>
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
                        <Middle>
                               <Button variant="contained" color="primary">Dark</Button>
                               <Button variant="contained" color="secondary">Light</Button>
                        </Middle>
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
    padding: 0 20px;
    padding-bottom: 24px;
  
   
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
            
        }
        input:focus {
            outline:none
        }
    }
`;
const SendButton = styled.div`
background: #007a5a;
border-radius: 2px;
width: 32px;
height: 32px;
display: flex;
align-items: center;
justify-content: center;
margin-right: 5px;
cursor: pointer;
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
justify-content: space-around;
align-items: center;
`;

const Left = styled.div`
    font-weight: 400;
`;
const Middle = styled.div`
font-weight: 400;
`;
const Right = styled.div`
font-weight: 400;
`;