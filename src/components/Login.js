import { FormControl } from "@mui/material";
import React from "react";
import { Form } from "react-bootstrap";
import Header from "./Header";
import {GrEdit} from "react-icons/gr";
import {MdDelete} from "react-icons/md";

function Login(){
    return(
        <>
        <div>
            <Header></Header>
        </div>
            <br></br>
            <br></br>
            <div className="container mt-3">
        <div className="row">
            <div className="col-6">
                <p>All Models</p>
            </div>
            <div style={{marginLeft:'465px'}} className="col-1 ml-2">

               
                <button id="but" type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
                    Create
                </button>
                
<div className="modal" id="myModal">
                    <div className="modal-dialog modal-fullscreen">
                        <div className="modal-content">
                        <div className="modal-header">
                                <h4 className="modal-title">Create/Update Model</h4>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                                    



                           
                            <div className="modal-body">
                            <form>

<div class="form-row">

    <div class="form-group col-md-6">

      <label  htmlFor="name">Name</label>

      <input type="text" id="name" class="form-control" placeholder="High gain model" />
    
     <div class="col"> 
      <label  htmlFor="riskcategory">Risk category</label>

    <input type="text" id="riskcategory" class="form-control" placeholder="Aggressive growth" />
    </div>
    </div>

    <div class="form-group col-md-6">

      <label  htmlFor="lname">Add security to your model</label>

      <input type="text" id="lname" class="form-control" placeholder="" />

    </div>

  </div>

  <input type="submit" style={{float: 'left'}} id="but" value="Submit">

</input>

</form>

                            </div>
                          
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                            </div>
                            
                            
                        </div>

                        </div>
                        </div>
                </div>

            </div>
                

            </div>
            <br></br>
            <div className="container">
            <table className="table" color="Green">
            <thead className="table-success">
                <tr>
                    <th>Name</th>
                    <th>Risk category</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Ram</td>
                    <td>Growth</td>
                    <td><GrEdit/><MdDelete/></td>
                </tr>
                <tr>
                    <td>Ajay</td>
                    <td>Aggressive growth</td>
                    <td><GrEdit/><MdDelete/></td>
                </tr>
            </tbody>
        </table>
        </div>
            
    
        </>
    )

}
export default Login;