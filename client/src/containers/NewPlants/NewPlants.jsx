import React, { useState } from 'react';
import axios from "axios";
import GardenTable from "../../components/GardenTable/GardenTable";

const NewPlants = () => {
    const [title, setTitle] = useState("");
    const [plantType, setplantType] = useState("");
    const [sciName, setSciName] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [maxHeight, setMaxHeight] = useState("");
    // const [added, setAdded] = useState(false);
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        axios
            .post("/api/plantAsk", {
                imageURL: imageURL,
                title: title,
                sciName: sciName,
                type: plantType,
                sunTolerance: sunTolerance
                maxHeight: maxHeight,


            })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (

        <div className="container">
        <div className="row">    
        <div className="col">
        <h1 className="center-align">Learn About New Plants</h1>
            </div> 
        </div>
        
        <h2 className="center-align">Plants that Thrive in Your Growing Zone</h2>
            </div> 
        </div>

    <table>
        <thead>
          <tr>
              <th>Image</th>
              <th>Name</th>
              <th>SciName</th>
              <th>Plant Type</th>
              <th>Sun Tolerance</th>
              <th>Max Height</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Alvin</td>
            <td>Eclair</td>
            <td>$0.87</td>
          </tr>
          <tr>
            <td>Alan</td>
            <td>Jellybean</td>
            <td>$3.76</td>
          </tr>
          <tr>
            <td>Jonathan</td>
            <td>Lollipop</td>
            <td>$7.00</td>
          </tr>
        </tbody>
      </table>




  <div className="container">
  <div className="row">    
  <div className="col"></div>
  <div className="row">
    <form className="col s12"> onSubmit={handleFormSubmit}>
      <div className="row">
        <div className="input-field col s6">
          <input placeholder="Plant Name" 
          id="title" 
          type="text" 
          name="title" 
          value={title} 
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          />
          <label htmlFor="title">Plant Name</label>
        </div>
        <div className="input-field col s6">
          <input placeholder="PLant Name" id="title" type="text"/>
          <label htmlfor="title">Plant Name</label>
        </div>
      </div>
      <div className="input-field col s6">
          <input placeholder="Plant Name" id="title" type="text"/>
          <label htmlFor="title">Plant Name</label>
        </div>
        <div className="input-field col s6">
          <input placeholder="PLant Name" id="title" type="text"/>
          <label htmlfor="title">Plant Name</label>
        </div>
        <div className="row">
            <div className="col s12">
                <button className="waves-effect waves-light btn">
                    Find These Plants
                </button>
            </div>
        </div>
      </form>
    </div>
   </div>     
   </div>
      
    );
        
    
  };
        
    
       
       
        
      

export default NewPlants;
