import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import './ChatView.css'
import { selectSelectedImage } from './features/appSlice'
import {CountdownCircleTimer} from 'react-countdown-circle-timer'

export default function ChatView() {

    const selectedImage=useSelector(selectSelectedImage)
    const history=useHistory()

   useEffect(()=>{
    if(!selectedImage){
        history.replace('/chats')
    }
   },[selectedImage,history])

    return (
        <div className='chatView'>
            <img src={selectedImage} alt=''/>
            <div className="chatView__timer">
            <CountdownCircleTimer isPlaying duration={10} strokeWidth={6} size={50} colors={"#004777"}>
                {({remainingTime})=>{
                    if(remainingTime===0){
                        history.replace('/chats')
                    }
                    return remainingTime
                }}
            </CountdownCircleTimer>
            </div>
        </div>
    )
}
