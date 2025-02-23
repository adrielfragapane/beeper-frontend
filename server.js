const express = require('express');

const path = require('path');

const app = express();

console.log(path.join (__dirname, 'public'));
const publicPath = path.join (__dirname, 'public');

console.log(path.join(publicPath, 'index.html'));

app.use(express.static(publicPath));

app.get('/*', (req,res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.set('port', process.env.PORT || 3000);

const server = app.listen(app.get('port'), () => {
    console.log('Server on port ' + app.get('port'));
  });