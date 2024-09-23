const express = require('express');
const app = express();
const path = require('path');
const apiRoutes = require('./routes/api');

const PORT = 3000;

app.use(express.static(path.join(__dirname, '../clientside/public')));
app.get('/detail', (req, res) => {
  res.sendFile(path.join(__dirname, '../clientside/public/detail.html'));
});

app.use('/static', express.static(path.join(__dirname, '../clientside/static')));

app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`服务器运行在 http://localhost:${PORT}`);
});