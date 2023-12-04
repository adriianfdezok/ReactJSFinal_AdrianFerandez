import React from 'react'
import ItemListContainer from './ItemListContainer'
import HomeImage from './HomeImage'
import Msliders from './Msliders'
 
const Home = () => {
  return (
    <div>
          {/* inicio  de componten slider */}
          <Msliders/>  
          {/* componente slider */}
          <br />
         <HomeImage />
         <ItemListContainer/>

    </div>
  )
}

export default Home