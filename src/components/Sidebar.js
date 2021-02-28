import React from 'react'
import styled from 'styled-components'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { sidebarItemsData } from '../data/SidebarData'
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import db from '../firebase'
import {useHistory, Route, Redirect} from 'react-router-dom'


function Sidebar(props) {
    const history = useHistory();
    const goToChannel = (id) => {
        if(id) {
            console.log(id);
            history.push(`/room/${id}`);
        }
    }
    const addChannel = () =>  {
        const promptName = prompt("Enter Channel Name: ");
        if(promptName) {
            db.collection('rooms').add({
                name: promptName
            })
        }
    }
    const deleteChannel = (id) => {
       
        db.collection("room").doc(id).delete().then(() => {
            console.log(id,"Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
        
    }
    return (
        <Container>
            <WorkspaceContainer>
                <Name>
                    ThugLifeScientist
                </Name>
                <NewMessage>
                    <AddCircleOutlineIcon />
                </NewMessage>
            </WorkspaceContainer>
            <MainChannels>
                {
                    sidebarItemsData.map(item => (
                        <MainChannelItem>
                            {item.icon}
                            {item.text}
                        </MainChannelItem>
                    ))
                }
            </MainChannels>
            <ChannelsContainer>
                <NewChannelContainer>
                    <div>
                        Channels
                    </div>
                    <AddIcon onClick={addChannel} />
                </NewChannelContainer>
                <ChannelsList>
                   {
                       props.rooms.map(item => (
                            <Channel onClick={() => goToChannel(item.id)}>
                             # {item.name}
                            <DeleteIcon onClick={() =>{
                                return ( 
                                db.collection('rooms').doc(item.id).delete()
                                
                                )
                                
                            }
                        
                        
                        }/>
                            </Channel>
                       ))
                   }
                            
                        
                </ChannelsList>
            </ChannelsContainer>
            
        </Container>
    )
}

export default Sidebar


const Container = styled.div`
    background: url('https://source.unsplash.com/ynFOw5ame58/400x1200');
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: inset -10px 10px 10px white;

`

const WorkspaceContainer = styled.div`
    color: white;
    height: 64px;
    display: flex;
    align-items: center;
    padding-left: 19px;
    justify-content: space-between;
    border-bottom: 1px solid  #532753;
    background: rgba(0, 0, 0, 0.3);
`

const Name = styled.div``

const NewMessage = styled.div`
    width: 36px;
    height: 36px;
    background: white;
    color: #3F0E40;
    fill: #3F0E40;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 20px;
    cursor: pointer;
`

const MainChannels = styled.div`
    padding-top: 20px;
    background: rgba(0, 0, 0, 0.5);
`

const MainChannelItem = styled.div`
    color: rgb(188,171,188);
    display: grid;
    grid-template-columns: 15% auto;
    min-height: 28px;
    align-items: center;
    padding-left: 19px;
    cursor: pointer;
    :hover {
        background: white;
        color: black;
    }
`

const ChannelsContainer = styled.div`
    color: rgb(188,171,188);
    margin-top: 10px;
    background: rgba(0, 0, 0, 0.6);
    padding: 0.75rem 1rem;
`

const NewChannelContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 28px;
    padding-left: 19px;
    padding-right: 12px;
`

const ChannelsList = styled.div``

const Channel = styled.div`
    height: 28px;
    display: flex;
    align-items: center;
    padding-left: 19px;
    cursor: pointer;
        transition: background 0.5s;
    :hover {
        background: white;
        color: black;
    }
`
