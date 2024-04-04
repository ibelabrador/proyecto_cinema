import React from 'react'
import Layout from './layout/Layout'
import CardList from './components/CardList'
import { Route, Routes } from 'react-router'
import Seats from './components/Seats'
import Asientos from './components/Carousel'
import SelectTickets from './components/SelectTickets'

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout></Layout>}>
          <Route index element={<CardList/>}></Route>
          <Route path='seats' element={<Seats/>}></Route>
          <Route path='select_tickets' element={<SelectTickets/>}></Route>
          <Route path='s' element={<Asientos/>}></Route>
        </Route>
        {/* <Route index element={<Card></Card>}></Route> */}
      </Routes>
    </>
  )
}

export default AppRoutes
