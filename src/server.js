// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3002;

app.use(cors());
app.use(express.json());

const db = require('./config/db'); // Konfiguracja połączenia z MySQL
db.connect(); // Należy dodać tę linię

// Endpointy do obsługi danych z bazy
// np. app.get('/offers', (req, res) => { ... });

app.listen(PORT, () => {
  console.log(`Serwer działa na porcie ${PORT}`);
});
