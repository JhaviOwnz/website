const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
//const Admin = require('./models/admin');
//const Content = require('./models/content');
const User = require('./models/user');
const bcrypt = require('bcryptjs');

// Configurar dotenv para cargar variables de entorno desde un archivo .env
require('dotenv').config();

const mongoDBURL = process.env.DB_URL;

mongoose.connect(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conexión a MongoDB exitosa');
});

// Configuración de Express y JWT
const app = express();
const jwtSecret = process.env.JWT_SECRET;

// Middleware para analizar el cuerpo de las solicitudes entrantes
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hola, bienvenido al servidor de la aplicación.");
});



// crear un nuevo usuario administrador
app.post('/create-admin', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash('123456', 10);
    const newUser = new User({
      username: 'admin',
      password: hashedPassword,
      email: 'test@test.com',
      isAdmin: true,
    });

    const savedUser = await newUser.save();
    res.status(201).json({ message: 'Usuario administrador creado con éxito', user: savedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear el usuario administrador', error: error.message });
  }
});



const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Servidor ejecutándose en el puerto ${port}`);
});