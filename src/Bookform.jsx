import React,{useContext} from 'react'
import {useParams} from "react-router-dom"
import {Context} from "./StateProvider";

const Bookform = () => {
    const{movieid}=useParams();
    console.log(movieid)

    const {data,setdata}=useContext(Context);
    let detail=data.find((val)=>{return val.show.id==movieid})

   
    return (
        <>
        <form>
        <div class="form-row">
    <div class="form-group col-md-6">
      <label for="moviename">Movie Name</label>
      <input type="text" class="form-control" id="moviename" value={detail.show.name}/>
    </div>
    <div class="form-group col-md-6">
      <label for="language">Language</label>
      <input type="text" class="form-control" id="language" value={detail.show.language}/>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="namefor">Name</label>
      <input type="text" class="form-control" id="namefor" placeholder="Name"/>
    </div>
    <div class="form-group col-md-6">
      <label for="emailfor">Email</label>
      <input type="email" class="form-control" id="emailfor" placeholder="email"/>
    </div>
  </div>
  <div class="form-group col-md-6">
    <label for="phonefor">Mobile No.</label>
    <input type="tel" class="form-control" id="phonefor" placeholder="1234567890"/>
  </div>
  
  <div class="form-row ">
    <div class="form-group col-md-4">
      <label for="nMT">No. of Movie Ticket</label>
      <select id="nMT" class="form-control">
        <option selected>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
  
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Book</button>
</form>
        </>
    )
}

export default Bookform
