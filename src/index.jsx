import { render } from 'react-dom'
import ChatBox from './components/chatbox/chatbox'

const app = <ChatBox/>
const here = document.querySelector('#here')


render(app, here)

console.log('yay')
