const net = require('net');
const readline = require('readline-sync');
const express = require('express');
const router = express.Router();

const servidor={
    port:3000,
    host: 'localhost'
}

const client = net.createConnection(servidor);

client.on('connect',()=>{
    console.log('conexión satisfactoria')
    sendLine()
})

client.on('data',(data)=>{
    console.log('El servidor dice: '+ data)
    sendLine()
})

client.on('error',(err)=>{
    console.log(err.message)
})

function sendLine(){
    var line = readline.question('\n ingresa un mensaje \n')
    if(line==0){
        client.end()
    }else{
        client.write(line)
    }
}


