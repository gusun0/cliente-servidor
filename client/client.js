const net = require('net');
const read_line = require('readline-sync');
const options = {
	port: 3000,
	host: 'localhost'
}

const client = net.createConnection(options);

client.on('connect', () => {
 console.log('Conexión satisfactoria');
 sendLine();
});

client.on('data', (data) => {
  console.log('El servidor dice: ' + data);
  sendLine();
});

client.on('error', (err) => {
  console.log(err.message); 
});


function sendLine(){
  var line = read_line.question('Digite alguna cosa:\n');
  if(line == '0'){
	  client.end();
  }else{
 	client.write(line);
  }
}

