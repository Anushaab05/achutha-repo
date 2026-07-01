const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: "CI/CD Pipeline Working 🚀" });
});

app.get('/health', (req, res) => {
  res.status(200).send("OK");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

