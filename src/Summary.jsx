import React,{useContext} from 'react'
import {useParams,Link} from "react-router-dom"
import {Context} from "./StateProvider"
import "./all.scss"
const Summary = () => {
    const {data}= useContext(Context)
    const{id}=useParams()
  
    let detail={}
    detail=data.find((val)=>{
      return val.show.id==id
    })
    console.log(detail)
    if(detail==undefined){
      detail={show:""}
    }
    

   
    return (<>
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
        </div>
      </div>
    </main>
    </div>
    </>
    )
}

export default Summary
