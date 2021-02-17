const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const plantSchema = new Schema({
      title: {
        type: String,
        trim: true,
        required: "Enter the name of the plant",
      },
      imageURL: {
        type: String,
        trim: true,
        required: "Enter a product image URL",
      },
      plantType: {
        type: String,
        trim: true,
        required: "Enter the general Plant type"
      },
      sciName: {
        type: String,
        trim: true,
        required: "Enter the scientific name",
      },
      moisture: {
        type: String,
        trim: true,
        required: "Enter Moisture tolerance",
      },
      sunTolerance: {
        type: String,
        trim: true,
        required: "Enter Sun Tolerance",
      },
      maxHeight: {
        type: String,
        trim: true,
        required: "Enter Sun Tolerance",
      },
    });
    
    const Plant = mongoose.model("Plant", plantSchema);
    
    module.exports = Plant;
    


















