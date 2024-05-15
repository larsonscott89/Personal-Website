import { Routes, Route, Navigate } from 'react-router-dom'
import React, { useRef, useState } from 'react'
import Header from './Header'
import AboutMe from './AboutMe'
import Projects from './Projects'
import ContactMe from './ContactMe'
import Footer from './Footer'
import Home from './Home'
import SpotlightEffectWrapper from './SpotlightEffectWrapper'

export default function Main() {

  return (
    <div>
      <Header />
      <SpotlightEffectWrapper>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/aboutme' element={<AboutMe/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contactme' element={<ContactMe/>}/>
        </Routes>
      </SpotlightEffectWrapper>
    </div>
  )
}