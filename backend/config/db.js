import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://jannatulferdous:kmno4@cluster0.2ndw1ss.mongodb.net/food-delivery').then(()=>console.log("DB Connected"));

}
