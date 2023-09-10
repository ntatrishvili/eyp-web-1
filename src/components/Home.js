import React from 'react'
import ESlogo from '../assets/logos/partner_logos/ESlogo.png'
import {Link, useNavigate} from 'react-router-dom'
import '../Styles/Home.css'
// import { CardContent } from '@mui/material';
import { Card, CardImg } from 'react-bootstrap';
import News from './News';


export default function Home() {
  return (
    <>
      <div className='container' key={0}>
      <h1 key={100}>Upcoming events</h1>
      <div className='card'>
          <div className='newsImage'>EYP Days</div>
          <div className='news'>
            <div className='newsHeader'>Tbilisi-Rustavi EYP Days</div>
            <div className='newsInfo'>
              <div className='newsText'>The session will take place in ... at.... while... and will gather up to ... participants</div>
              <button className='openNewsButton' onClick={console.log("eypIsCool")}>see more</button>
            </div>
          </div>
      </div>

      <div className='card' key={1}>
          <div className='newsImage'>Tskaltubo</div>
          <div className='news'>
            <div className='newsHeader'>Tskaltubo Regional Selection Conference 2023</div>
            <div className='newsInfo'>
              <div className='newsText'>The Tskaltubo Regional Selection Conference 2023 will .... </div>
              <button className='openNewsButton' onClick={console.log("eypIsCool")}>see more</button>
            </div>
          </div>
      </div>

      <div className='card' key={2}>
          <div className='newsImage'>NCMD'23</div>
          <div className='news'>
            <div className='newsHeader'>National Committee Management and Development 2023</div>
            <div className='newsInfo'>
              <div className='newsText'>The national committee training will take place in ... for ... days</div>
              <button className='openNewsButton' onClick={console.log("eypIsCool")}>see more</button>
            </div>
          </div>
      </div>

      <div className='card' key={3}>
          <div className='newsImage'>#EYPiA</div>
          <div className='news'>
            <div className='newsHeader'>#EYPinAction 2023</div>
            <div className='newsInfo'>
              <div className='newsText'>this annual event has become a tradition for..... for ... days will gather ... participants...</div>
              <button className='openNewsButton' onClick={console.log("eypIsCool")}>see more</button>
            </div>
          </div>
      </div>

      <div className='card' key={4}>
          <div className='newsImage'>TIF</div>
          <div className='news'>
            <div className='newsHeader'>Tiflisi International Forum 2023 - 16th National Selection Conference</div>
            <div className='newsInfo'>
              <div className='newsText'>this forum will take place in Tbilisi and gather more than ... participants... </div>
              <button className='openNewsButton' onClick={console.log("eypIsCool")}>see more</button>
            </div>
          </div>
      </div>
</div>
    </>
  )

}

