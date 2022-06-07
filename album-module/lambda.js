// const awsServerlessExpress = require('aws-serverless-express');
// const { server, startServer } = require('./app/server');

// const binaryMimeTypes = [
//   'application/octet-stream',
//   'font/eot',
//   'font/opentype',
//   'font/otf',
//   'image/jpeg',
//   'image/png',
//   'image/svg+xml',
// ];
// startServer();
// const app = awsServerlessExpress.createServer(server, null, binaryMimeTypes);
// exports.handler = (event, context) => awsServerlessExpress.proxy(app, event, context);


'use strict'
const awsServerlessExpress = require('aws-serverless-express')
const app = require('./index')
const server = awsServerlessExpress.createServer(app)

exports.handler = (event, context) => awsServerlessExpress.proxy(server, event, context)
