const net = require('net');
const readline = require('readline-sync');
const express = require('express');
const router = express.Router();


const servidor={
    port:4000,
    host: 'localhost'
}

const client = net.createConnection(servidor);

client.on('connect',()=>{
    console.log('Cliente conectado');
    sendLine();
})


client.on('data',(data)=>{
    console.log('el server dice '+data.toString());
    sendLine();
})

client.on('error',(err)=>{
    console.log(err.message);
})

function sendLine(){
    let line = readline.question('Ingrese una linea:');
    if(line==0){
        client.end();
    }else{
        client.write(line);
    }
}