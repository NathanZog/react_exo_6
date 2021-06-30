import React from 'react'
import Header from './Header/Header'
import Contenu from './Contenu/Contenu'
import Footer from './Footer/Footer'

export default function App() {
  return (
    <div className='App'>
      <Header format="phpTime"/>
      <Contenu/>
      <Footer/>
    </div>
  )
}


