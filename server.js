require('dotenv').config({ path: './config/.env' });
// packages
const express = require('express');
const testRoutes = require('./routes/test.routes');

const app = express();
const PORT = process.env.PORT || 5000;

// Routes
app.use('/api', testRoutes);
// app express
app.listen(PORT, () => {
  console.log(`app listning : localhost:${PORT}`);
});
