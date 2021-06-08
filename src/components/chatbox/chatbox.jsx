import { Box, Button } from '@material-ui/core'
import React, { Fragment, useState,  useEffect } from  'react'
import { db, date, auth, GitHubProvider } from '../../config/firestore'
import { BorderBox } from './chatbox.styled'

const ChatBox = () => {
  const [message, setMessage] = useState('')
  const [photoURL, setPhotoURL] = useState('')

  const [messageList, setMessageList ] = useState([])

  useEffect(() => {
    db.collection('chat').onSnapshot((snap) => {
      setMessageList(
        snap.docs.map(doc => ({
          ...doc.data(),
          id: doc.id
        }))) 
     })
    return () => {
          //pe cine vreau
        }
  }, [])

  const updateChange = (e) => {
    const {value} = e.target
    setMessage(value)
    console.log(e, '##########################################')
  }

  const onClick = () => {
    db.collection('chat').add({
      message,
      sender: 'us',
      receiver: 'awesomeness',
      date,
    })
  }

  console.log(messageList)
  // console.log(date)


  const login = async () => {
    const raspuns = await auth.signInWithPopup(GitHubProvider)
    console.log(raspuns.user.photoURL)
    setPhotoURL(raspuns.user.photoURL)
    
    // auth.signInWithPopup(GitHubProvider).then((raspuns) => {console.log(raspuns)})
    
 }
    
  return(
    <>
      <div>Chatbox</div>
      <img src={photoURL} />
      <Button onClick={login}>Login</Button>
      <Box>{messageList.map((message) => (
        <Fragment key={message.id}>
          <BorderBox >{message && message.date && new Date(message.date.seconds * 1000).toISOString()}</BorderBox>
          <BorderBox >{message.message}</BorderBox>
        </Fragment>
        ))}
      </Box>
      <Box>
        <input  type='text' onChange={updateChange} value={message}></input>
      <button onClick={onClick}>Send</button>
      </Box>
      
    </>
  )
}

export default ChatBox
