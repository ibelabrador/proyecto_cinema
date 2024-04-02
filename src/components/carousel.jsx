import React, { useEffect } from 'react'



// const Asientos = ({ asientos = 50, filas = 8, columnas = 12 }) => {

//     useEffect(() => {
//       console.log(asientos)
//       console.log(filas)
//       console.log(columnas)
//     }, [asientos, filas, columnas])
    
//     const asientosSalas = []
//     const asientosfila = ``
    
//     const asientosColumnas=``

//     let contadorAsientos = 0;
//     for (let index = 0; index < filas; index++) {
//       const asientosFilas=``
//       const charColum=<p>{String.fromCharCode(65 + index)}</p>
//       asientosColumnas+=charColum;
//       for (let position = 0; position < columnas; position++) {
//         const codigoAsiento =  `${contadorAsientos + 1}`
//         if (contadorAsientos == asientos) {
//           break;
//         }
//         asientosFilas=(
//           <button key={`${index}-${position}`} className="relative justify-center mr-2">
//             <svg
//               className="w-8  fill-blue-700"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 640 512"
//             >
//               <path d="M64 160C64 89.3 121.3 32 192 32H448c70.7 0 128 57.3 128 128v33.6c-36.5 7.4-64 39.7-64 78.4v48H128V272c0-38.7-27.5-71-64-78.4V160zM544 272c0-20.9 13.4-38.7 32-45.3c5-1.8 10.4-2.7 16-2.7c26.5 0 48 21.5 48 48V448c0 17.7-14.3 32-32 32H576c-17.7 0-32-14.3-32-32H96c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V272c0-26.5 21.5-48 48-48c5.6 0 11 1 16 2.7c18.6 6.6 32 24.4 32 45.3v48 32h32H512h32V320 272z" />
//             </svg>
//             <p className="absolute top-0 left-2 text-xs text-white">{codigoAsiento}</p>
//           </button>
//           // <button>{codigoAsiento}</button>
//         )
//         contadorAsientos++;
//       }

//       asientosfila=(
//         asientosColumnas+
//         asientosFilas
//       );
//       asientosSalas.push(asientosfila)
      
//     }
//     return (  
//       <div>{asientosSalas}</div>
//     )
//   }

//   export default Asientos

// import React, { useEffect } from "react";

const Asientos = ({ asientos = 50, filas = 8, columnas = 12 }) => {
  useEffect(() => {
    console.log(asientos);
    console.log(filas);
    console.log(columnas);
  }, [asientos, filas, columnas]);

  const asientosSalas = [];
  const asientosColumna=[];

  for (let index = 0; index < filas; index++) {
    const asientosFila = [];
    const charColum = <p className='mr-2'>{String.fromCharCode(65 + index)}</p>;
    asientosColumna.push(charColum);

    for (let position = 0; position < columnas; position++) {
      const codigoAsiento = `${position + 1}`;
      if (index * columnas + position >= asientos) break;
      asientosFila.push(
        <button key={codigoAsiento} className="relative justify-center mr-2">
          <svg
            className="w-8  fill-blue-700"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
          >
            <path d="M64 160C64 89.3 121.3 32 192 32H448c70.7 0 128 57.3 128 128v33.6c-36.5 7.4-64 39.7-64 78.4v48H128V272c0-38.7-27.5-71-64-78.4V160zM544 272c0-20.9 13.4-38.7 32-45.3c5-1.8 10.4-2.7 16-2.7c26.5 0 48 21.5 48 48V448c0 17.7-14.3 32-32 32H576c-17.7 0-32-14.3-32-32H96c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V272c0-26.5 21.5-48 48-48c5.6 0 11 1 16 2.7c18.6 6.6 32 24.4 32 45.3v48 32h32H512h32V320 272z" />
          </svg>
          <p className="absolute top-0 left-2 text-xs text-white">{codigoAsiento}</p>
        </button>
      );
    }

    asientosSalas.push(
      <div className='flex'>
        {charColum}
        <div key={`${index}m`}>
          {asientosFila}
        </div>
      </div>
    );
  }

  return <div>{asientosSalas}</div>;
};

export default Asientos;
