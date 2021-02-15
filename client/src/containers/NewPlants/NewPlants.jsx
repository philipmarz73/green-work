import React, { useState } from 'react';
import axios from "axios";
import NewPlantForm from "../../components/NewPlantForm/NewPlantForm";

const NewPlants = () => {
    const [title, setTitle] = useState("");
    const [plantType, setplantType] = useState("");
    const [sciName, setSciName] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [maxHeight, setMaxHeight]
    const handleFormSubmit = (e) => {
        e.preventDefault();
        axios
            .post("/api/plants", {
                imageURL: imageURL,
                title: title,
                sciName: sciName,
                type: plantType,
                maxHeight: maxHeight 
                

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
        <div className= "row">
          <NewPlantForm handleFormSubmit={handleFormSubmit} />
        </div>
       </div>
    );
};

export default NewPlants;
