import mongoose from "mongoose";

// VERİTABANI BAGLAN
mongoose.connect(process.env.MONGO_URI);

// AYAR
mongoose.Promise = global.Promise;

// SEMA OLUSUTR
const VehicleSchema = new mongoose.Schema({
  make: String,
  model: String,
  year: Number,
  price: Number,
  color: String,
  milage: Number,
  fuelType: String,
  transmission: String,
  condition: String,
  imageUrl: String,
});

//MODEL OLSUTRU
// PERFORMAN İÇİN HER İMPORT SORUN OLSUMAMANSI İÇİN VEHİCLE MODEL KONTROLU SAĞLANACA

const Vehicle =
  mongoose.models?.VehicleSchema || mongoose.model("Vehicle", VehicleSchema);

export default Vehicle;
