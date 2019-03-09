const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/load/submitted/:project_id', (req, res) => {
  const dirPath = '/home/bradabayor/Desktop/05 Structural';
  let result = [];

  fs.readdir(dirPath, (err, filesPath) => {
    if (err) throw err;
    result = filesPath.map(filePath => dirPath + filePath);
    res.json({
      loaded: true,
      files: result,
      dirpath: dirPath,
      project_id: req.params.project_id,
    });
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
