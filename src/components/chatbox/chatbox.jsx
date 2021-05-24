import { Box } from '@material-ui/core'
import React from  'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { db, ts } from '../../config/firestore'
import { BorderBox, TextBox } from './chatbox.styled'


const ChatBox = () => {
  const [message, setMessage] = useState('')

  const [messageList, setMessageList] = useState([])

  

  useEffect(() => {
    //mai tarziu
    db.collection('chat').onSnapshot((snap) => {
      console.log(snap.docs.map((doc) => console.log(doc.data(), doc.id)))
      setMessageList(
        snap.docs.map(doc => doc.data().message)
      )
    })

    return () => {
      // chem pe cine pot sa dau unsubscribe
    }
  }, [])

  const updateChange = (e) => {
    const {value} = e.target
    setMessage(value)
  }

  const onClick = () => {
    db.collection('chat').add({
      message,
      sender: 'us',
      receiver: 'awesomeness',
      date: ts,
    })
  }

  return(
    <>
      <div>Chatbox</div>
      <Box>{messageList.map((value, key) => (
        <BorderBox key={key}>{value}</BorderBox>
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
