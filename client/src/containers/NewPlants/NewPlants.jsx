import React, { useState } from 'react';
import axios from "axios";

const NewPlants = () => {
    const [title, setTitle] = useState("");
    const [type, setType] = useState("");
    const [sciName, setSciName] = useState("");
    const [imageURL, setImageURL] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        axios
            .post("/api/plants", {
                title: title,
                type: type,
                sciName: sciName,
                imageURL: imageURL,
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
        <h1 className="center-align">Add New Plants</h1>
            </div> 
        </div>
        <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input placeholder="Placeholder" id="first_name" type="text" class="validate"/>
          <label for="plant_name">Plant Name</label>
        </div>
        <div class="input-field col s6">
          <input id="last_name" type="text" class="validate"/>
          <label for="last_name">Last Name</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12" onSubmit={handleFormSubmit}></div>
          <input disabled value="I am not editable" id="disabled" type="text" class="validate"/>
          <label for="disabled">Disabled</label>
        </div>
      {/* </div> */}
    <div class="row">
        <div class="input-field col s12">
          <input id="password" type="password" class="validate"/>
          <label for="password">Password</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="email" class="validate"/>
          <label for="email">Email</label>
        </div>
      </div>
      <div class="row">
        <div class="col s12">
          This is an inline input field:
          <div class="input-field inline">
            <input id="email_inline" type="email" class="validate"/>
            <label for="email_inline">Email</label>
            <span class="helper-text" data-error="wrong" data-success="right">Helper text</span>
          </div>
        </div>
      </div>
    </form>
  </div>
        
        </div>
    );
};

export default NewPlants;