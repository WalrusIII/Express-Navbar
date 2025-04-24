// server.js

const express = require("express");
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

// add any necessary code you'd want to!
app.use(express.static(path.join(__dirname, 'public')))


//root
app.get('/', (req, res) => {
    // your nav bar is on index.html
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})


// Route for Climate Crisis
app.get("/climate-crisis", (req, res) => {
  //TODO add code!
  res.redirect('https://github.com/JKH122/Climate-Crisis')
  //res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

// Route for Typesetting
app.get("/typesetting", (req, res) => {
    res.redirect('https://github.com/WalrusIII/CSC-317-Assignment-Typsetting')
  //TODO add code
});

// Route for Four Algorithms
app.get("/four-algorithms", (req, res) => {
  res.redirect('https://github.com/WalrusIII/four-algorithms')
  //TODO add code
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});