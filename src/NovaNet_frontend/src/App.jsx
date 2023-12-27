import React from 'react'
import { Navbar } from './Navbar'
import { FirstPage } from './FirstPage'
import { Routes, Route } from 'react-router-dom'

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<FirstPage />} />
    </Routes>
  )
}
