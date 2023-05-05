const express = require('express');

//
const app = express();

// config
const port = 3000;

// serve static files
app.use(express.static('public'));

// start server
app.listen(port, () => {
  console.log(`Server is live on port ${port}`);
});
