const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

app.use(cors());
app.use('/', express.static(path.join(__dirname, 'access-keys')));

app.listen(port, () => {
  console.log(`Server has been started on port ${port}`);
});
