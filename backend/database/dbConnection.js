import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect("mongodb://localhost:27017/HEALTHCARE_MANAGEMENT_SYSTEM")
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log("Some error occured while connecting to database:", err);
    });
};
