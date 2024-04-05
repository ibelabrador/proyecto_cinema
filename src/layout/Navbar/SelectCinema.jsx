import React, { useEffect, useState } from 'react'
import { getAllCinemas } from '../../services/cinemaServices';


const SelectCinema = () => {
    const [cinemas, setCinemas] = useState([])
    const [selectedCinema,setSelectedCinema]=useState("")

    useEffect(()=>{
       getAllCinemas().then((response)=>{
        // console.log(response);
        setCinemas(response);
        }).catch((error)=> console.error(error));
    },[])


    const handleSelectChange = (event) => {
      console.log(event.target.value);
      setSelectedCinema(event.target.value);
      localStorage.setItem("selectedCinemaId", event.target.value);
      
    };

  return (
    <form className="md:order-2">
          <label htmlFor="cinemas" className="block mb-2 text-base font-semibold text-gray-text textSecundary ">Cines cercanos</label>
          <select id="cinemas" className="bg-transparent border border-gray-text text-gray-text textSecundary text-sm rounded-lg focus:ring-blue-button focus:border-blue-button block w-full p-2.5" onChange={handleSelectChange} value={selectedCinema} >
            <option>Seleccione cine</option>
            {
                cinemas.map((cinema,index)=>
                // {console.log(cinema.name)}
                <option key={index} value={cinema.id}>{cinema.name}</option>
                )
            }
          </select>
    </form>
  )
}

export default SelectCinema
