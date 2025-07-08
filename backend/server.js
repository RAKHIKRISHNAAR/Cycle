

// server.js
const express = require('express');
const mongoose = require('mongoose');
const Contact = require('./models/Contact');
require('dotenv').config(); // Load environment variables
const cors=require('cors')


const app = express();
app.use(express.json());
app.use(cors()); // allow all origins during development

// Check if MONGO_URI is defined
if (!process.env.MONGO_URI) {
  console.error("❌ MONGO_URI is not defined in .env file");
  process.exit(1); // Stop server
}

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1); // Stop server if DB connection fails
  });

//for small project -route can set here instead of other route file 

app.post('/api/contact',async(req,res)=>{
  try{
    const {name,email,phone,place,message}=req.body
    const newContact=new Contact({name,email,phone,place,message})
    await newContact.save();
    res.status(200).json({message:'Contact submitted successfully'}) 
  
  } catch(error){
    res.status(500).json({error:'Server error'})
  }
})


// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`🚀 Server started on port ${PORT}`);
});
