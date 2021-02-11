import React, { useState } from 'react';
import axios from "axios";
import NewPlantForm from "../../components/NewPlantForm/NewPlantForm";

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
        <div className= "row">
          <NewPlantForm handleFormSubmit={handleFormSubmit} />
        </div>
       </div>
    );
};

export default NewPlants;
