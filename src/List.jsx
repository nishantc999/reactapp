import React,{useContext} from 'react'
import {Context} from "./StateProvider"
import {Table} from "react-bootstrap"
import {Link} from "react-router-dom"

const List=()=> {
const {data}=useContext(Context)
console.log(data[1])



    return (<>
     <Table striped bordered hover size="sm">
                <thead>
                    <tr align="center">
                        <th>#</th>
                        <th>Name</th>
                        <th>Average Runtime</th>
                        <th>image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody align="center">
                    {data.map((val, index) => {
                        let {image}=val.show
                        if(image==null){
                            image=1
                        }
                        return <tr key={index} style={{ textAlign: 'center' }} >
                            <td style={{ textAlign: 'center' }}>{val.show.id}</td>
                            <td style={{ textAlign: 'center' }}>{val.show.name}</td>
                            <td style={{ textAlign: 'center' }}>{val.show.averageRuntime}</td>
                            <td style={{ textAlign: 'center' }}><img src={image["medium"]}/></td>
                            <td style={{ textAlign: 'center' }}><Link class="btn btn-info"

                                to={{ pathname: "/summary/"+val.show.id}}
                            >summary</Link>
                             </td>
                        </tr>
                    })}


                </tbody>
            </Table>
    </>
    )
}

export default List
