import React from 'react';

const MyGarden = () => {
    return (
             <div className="container">
        <div className="row">    
        <div className="col s12">
        <h1 className="center-align">My Garden</h1>
            </div>
           </div>
           <div className="row">
               <div className= "col s12">
               <table className="striped">
        <thead>
          <tr>
              <th>Title</th>
              <th>Image</th>
              <th>Type</th>
              <th>Scientific Name</th>
              <th>Moisture Tolerance</th>
              <th>Sun Tolerance</th>
              <th>Max Height</th>
              <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Lily</td>
            <td>PLACEHOLD</td>
            <td>Flower/bulb</td>
            <td>Lily Lileus</td>
            <td>moderate </td>
            <td>Full Sun</td>
            <td>30</td>
            <td>Checkbox?</td>
          </tr>
          <tr>
          <td>Lily</td>
            <td>PLACEHOLD</td>
            <td>Flower/bulb</td>
            <td>Lily Lileus</td>
            <td>moderate </td>
            <td>Full Sun</td>
            <td>30</td>
            <td>Checkbox?</td>
          </tr>
          <tr>
            <td>Jonathan</td>
            <td>Lollipop</td>
            <td>$7.00</td>
          </tr>
        </tbody>
      </table>
            


               </div>
               
               
               </div> 
        </div>
    );
};

export default PlantCare;