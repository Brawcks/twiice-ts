export {};

// Load needed modules
const express = require('express');
// const router = express.Router();

// Twiice utilities
const logger = require('twiice/debug').logger;

logger.info('Loading crm module');

const model = require('./models/pipeline.js');
