const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

app.use('/', express.static(path.join(__dirname, 'dist/rk-ui')));

app.listen(port, () => {
  console.log(`Server has been started on port ${port}`);
});
