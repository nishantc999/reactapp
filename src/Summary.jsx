import React,{useContext, useEffect} from 'react'
import {useParams,Link,useHistory} from "react-router-dom";
import {Context} from "./StateProvider";
import Bookform from "./Bookform";
import "./all.scss";
import {url} from './Config';
import Axios from "axios";

const Summary =()=>{
  const {data,setdata}=useContext(Context);
  const history = useHistory()
  const {id}=useParams()
console.log(data)
console.log(history)
console.log(id)
let detail=data.find((val)=>{return val.show.id==id})
console.log(detail)
if(detail==undefined){
  detail={show:{
    genres:[],
    image:"",
    rating:""

  }}
}
return(<>
<h1>{detail.show.name}</h1>
<div className="body">
     <main >
       <div className="card_div">
         <div className="card__title">
           <div className="icon">
             <Link to="/"><i className="fa fa-arrow-left"></i></Link>
           </div>
           <h3>Details</h3>
        </div>
         <div className="card__body">
           <div className="half">
             <div className="featured_text">
               <h1>{detail.show.name}</h1>
               <p className="sub">Language :{detail.show.language}</p>
              <p className="genres">genres: {detail.show.genres.map((val)=>{return val+" "})}</p>
            </div>
            <div className="image">
              <img src={detail.show.image.medium} alt=""/>
              
            </div>
           </div>
          <div className="half">
            <div className="description">
            {detail.show.summary}
              </div>
             <span className="stock"><i className="fa fa-pen"></i> Rating: {detail.show.rating.average}</span>
            
           </div>
         </div>
        
         <div className="card__footer"> 
         <div class="action">
            <Link to={{ pathname:"/book/"+id}}>Book Movie Ticket</Link>
             {/* <button type="button" onClick={()=>{book(detail.show.id)}}>Book Movie Ticket</button> */}
           </div>
         </div>
       </div>
     </main>
     </div>
</>)
}
export default Summary;
