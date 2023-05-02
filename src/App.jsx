import React, { useState } from 'react'
import Nav from './Components/Nav'
import Body from './Components/Body'
import { useSelector } from 'react-redux'
import './Styles/App.scss'


export default function App() {


  return (
    <>
      <Nav />
      <Body />
    </>
  )
}

