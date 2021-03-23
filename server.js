require('dotenv').config({ path: './config/.env' });
// packages
const express = require('express');


const app = express();
const PORT = process.env.PORT || 5000;

// Routes
app.use("/",(req,res)=>{
  res.status(200).json('test deployment')
})
// app express
app.listen(PORT, () => {
  console.log(`app listning : localhost:${PORT}`);
});
