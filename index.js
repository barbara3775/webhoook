const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8443;  // Render proporciona el puerto a través de la variable de entorno PORT

const token = '5881769745:AAFiecIBFXB7lIJXhf3N1XP4TPc6uc4ZOjU';

app.use(bodyParser.json());

app.post(`/bot${token}`, (req, res) => {
  const update = req.body;

  console.log('Update received:', update); // Log completo para depuración

  if (update.message) {
    console.log(`Chat ID: ${update.message.chat.id}`);
    console.log(`Message ID: ${update.message.message_id}`);
    console.log(`Message: ${update.message.text}`);
  }

  res.sendStatus(200);
});

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
