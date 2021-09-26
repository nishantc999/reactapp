import React,{createContext,useState,useEffect} from 'react'
import Axios from 'axios';
import {url} from './Config';
export const Context=createContext()


const StateProvider = ({children}) => {
    const [data,setdata]=useState([]);
    useEffect(() =>{
    Axios.get(url).then((response) =>setdata([...response.data]));
    },[])
   
    return (<>
        <div>
               <Context.Provider value={{data,setdata}}>
                {children}
               </Context.Provider>
            
               
        </div>

  </>  )
}

export default StateProvider
