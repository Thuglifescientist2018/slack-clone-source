import React from 'react'
import styled from 'styled-components'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'


function Chat() {
    


    return (
            <Container>
                <Header id="chat-header">
                    <Channel>
                        <ChannelName>
                            # Shashwat Dahal
                        </ChannelName>
                        <ChannelInfo>
                            Where Creativity and Divergent Thinking Matters
                        </ChannelInfo>
                    </Channel>
                <ChannelDetails>
                <div>
                        Details
                    </div>
                    <Info />
                </ChannelDetails>
                </Header>
                <MessageContainer id="chat-messages">
                        <ChatMessage/>
                </MessageContainer>
                <ChatInput id="chatInputs"/>
            </Container>

    )
}

export default Chat;

const Container = styled.div`
background: url('https://source.unsplash.com/in9-n0JwgZ0/1920x1080') no-repeat center center/cover;
    display: grid;
    grid-template-rows: 64px auto min-content;
`

const Channel = styled.div``

const ChannelDetails = styled.div`
    display: flex;
    align-items: center;
    color: #606060;
`

const ChannelName = styled.div`
    font-weight: 700;
`

const ChannelInfo = styled.div`
    font-weight: 400;
    color: #606060;
    font-size: 13px;
    margin-top: 8px;
    color: #ddd;
`

const Info = styled(InfoOutlinedIcon)`
    margin-left: 10px;
`

const Header = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(83, 39, 83,0.3);
    justify-content: space-between;
    color: #ddd;
`

const MessageContainer = styled.div`
`
