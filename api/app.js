const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;

app.use(express.static(path.join(__dirname, '../clientside/public')));
app.use('/static', express.static(path.join(__dirname, '../clientside/static')));

app.listen(PORT, () => {
  console.log(`服务器运行在 http://localhost:${PORT}`);
});