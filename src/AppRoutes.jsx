import React, { useState } from 'react'
import Layout from './layout/Layout'
import CardList from './components/CardList'
import { Route, Routes } from 'react-router'
import Seats from './components/Seats'


const INITIALCINEMA = localStorage.getItem("idSelectedCinema") ?? 0;
const INITIALDATE = localStorage.getItem("idSelectedDate");

const AppRoutes = () => {
  const [dataRecibida,setDataRecibida]=useState({ cinema: INITIALCINEMA, date: INITIALDATE })
  const handleSelection = (data) => {
    setDataRecibida(data);
  };
  return (
    <>
      <Routes>
        {/* <Route element={<Layout handleSelection={handleSelection}/>}> */}
        <Route element={<Layout handleSelection={handleSelection}/>}>
          <Route index element={<CardList dataSelected={dataRecibida}/>}></Route>
          <Route path='seats' element={<Seats/>}></Route>
          {/* <Route path="details/:idPelicula" element={<DetailMovie/>}/>
          <Route path="select_ticket" element={<DetailMovie/>}/> */}
        </Route>
        {/* <Route index element={<Card></Card>}></Route> */}
      </Routes>
    </>
  )
}

export default AppRoutes
