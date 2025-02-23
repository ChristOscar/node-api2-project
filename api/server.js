// implement your server here
// require your posts router and connect it here
const express = require('express');
const postsRouter = require('./posts/posts-router');

const server = express();
server.use('/api/posts', postsRouter);
server.use(express.json());

module.export = server;