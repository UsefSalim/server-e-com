require('dotenv').config({ path: './config/.env' });
// packages
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth.routes')
const categorieRoutes = require('./routes/Categorie.routes');
// const productRoutes = require('./routes/Product.routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Mongo Db Connected ....'))
  .catch((err) => console.log(`Error connection to the DataBase : ${err}`));
// Routes
app.use('/api', authRoutes)
app.use('/api/categories', categorieRoutes);
// app.use('/api/products', productRoutes);

app.listen(PORT, () =>
{
  console.log(`app listning : localhost:${PORT}`);
});
