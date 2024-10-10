var http = require('http')
    ,app = require('./config/express');

console.log('Diretório atual: ', process.cwd()); // Exibe o diretório atual no console


http.createServer(app).listen(8080, function() {
    console.log('Servidor escutando na porta: ' + this.address().port);
});

