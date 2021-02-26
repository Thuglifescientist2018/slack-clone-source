import './App.css';
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Chat from './components/Chat'
import Login from './components/Login'
import styled from 'styled-components'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import db from './firebase'
import { auth, provider } from "./firebase";






function App() {


  const [rooms, setRooms] = useState([]) 
  const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('user'))); 

  const getChannels = () => {
    db.collection('rooms').onSnapshot((snapshot) => {
      setRooms(snapshot.docs.map((doc) => {
        return { id: doc.id, name: doc.data().name }
      }))
    })

  }

  const signOut = () => {
    auth.signOut().then(()=>{
      localStorage.removeItem('user');
      setUser(null);
    })
  }

  useEffect(() =>{
    getChannels();
  }, [])


  return (
    <div className="App">
      <Router>
        {
          !user ?
          <Login setUser={setUser}/>
          :
          <Container>
            <Header signOut={signOut} user={user} />
            <Main>
              <Sidebar  rooms={rooms}  /> 
              <Switch>
                <Route path="/room/:channelId">
                  <Chat user={user} />
                </Route>
                <Route path="/">
                  <CreateOrSelect>
                          <div className="container">
                            <h2>Create or Select Channel</h2>
                          </div>
                  </CreateOrSelect>
                </Route>
              </Switch>
            </Main>
          </Container>
        }
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 38px minmax(0, 1fr);
`

const Main = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
  `

const CreateOrSelect = styled.div`
display: flex;
justify-content: center;
align-items:center;
background: url('https://source.unsplash.com/u27Rrbs9Dwc/1920x1080') no-repeat center center/cover;
color: white;
.container  {
  background: rgba(0, 0, 0, 0.8) no-repeat center center/cover;
  height: 40vh;
  width: 40vw;
  display: flex;
  justify-content: center;
  align-items:center;
  font-size: 9rem;
  
}
`;
