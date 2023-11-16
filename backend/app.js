const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());

// Conectarse a la base de datos
mongoose.connect('mongodb://user:user@mongo:27017/mongo_db', { useNewUrlParser: true, useUnifiedTopology: true });

// Manejar el evento de conexión exitosa
mongoose.connection.on('open', () => {
  console.log('Conexión exitosa a MongoDB');

  console.log('MongoDB Database:', mongoose.connection.name);
  
  // Definir el esquema y el modelo después de que la conexión está abierta
  const messageSchema = mongoose.Schema({
    mensaje: String,
  });

  const Message = mongoose.model('Message', messageSchema);


  // Rutas y lógica de la aplicación después de que la conexión está abierta
  app.get('/mensajes', async (req, res) => {
    // Obtener la lista de mensajes
    const messages = await Message.find();

    // Devolver la lista de mensajes
    res.json(messages);
  });

  // Iniciar la aplicación después de que la conexión está abierta
  app.listen(4000, () => {
    console.log('Servidor Express iniciado en el puerto 4000');
  });
});

// Manejar el evento de error de conexión
mongoose.connection.on('error', (error) => {
  console.error('Error al conectar a MongoDB:', error);
});
