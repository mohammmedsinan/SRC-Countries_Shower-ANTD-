import React from 'react'
import { Card , Image} from "antd";
import { useLoadScript , GoogleMap} from '@react-google-maps/api'

export default function ReuseAble(props) {
    /* map api code */
   const {isLoaded , loadError} =useLoadScript({
       googleMapsApiKey:"AIzaSyB-wCpW_IH06zVckbnioBVMUx2x17YKTxE" , 
       libraries:[`places`]
   });

   /* when loading map */
   if (loadError)return "err map"
   if (!isLoaded)return "loading map"
  
    return (
        <Card  key={props.name} style={{backgroundColor:"#bd9ce8" , margin:"20px 0px"  }}>


        <div style={{textAlign:"center"}}>
        <Image
            width={200}
             src={props.flag}
             />
           <p style={{fontSize:"22px" ,color:"darkgreen" , fontWeight:"bold" , margin:"0px" , padding:"0px"}}>Name: {props.name}</p>
           <p style={{fontSize:"15px" ,color:"darkgreen"  , margin:"0px" , padding:"0px"}}>Region: {props.region}</p>
           <p style={{fontSize:"18px" ,color:"darkgreen", fontWeight:"bold"  , margin:"0px" , padding:"0px"}}>capital: {props.capital}</p>
        </div>

        <div > 
           <p style={{fontSize:"15px" ,color:"darkgreen" , textAlign:'center' , fontWeight:"bold"}}>The population : {props.population}</p>
           <GoogleMap 
           key={new Date}
           mapContainerStyle={{width:"70vh" , height:"30vh" , borderRadius:"30px"}}
           zoom={9}
           center={{ lat:props.latlng[0] , lng:props.latlng[1]}}
           options={{disableDefaultUI:true}}
           ></GoogleMap>
        </div>

    </Card>
    )
}

