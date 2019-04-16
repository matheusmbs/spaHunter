const express = require('express');
const path = require('path');
const nomeApp = process.env.npm_package_name;
const app = express();
 
app.use(express.static('C:/Users/mathe/angular-workspace/angular-7-registration-login-example-cli/dist/appHunter'));
 
app.get('/*', (req, res) => {
res.sendFile(path.join('C:/Users/mathe/angular-workspace/angular-7-registration-login-example-cli/dist/appHunter/index.html'));
});
 
app.listen(process.env.PORT || 8080);