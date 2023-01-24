import express, { Router } from 'express';
import fetch from "node-fetch";
import fs from 'fs';

const router = express.Router();


router.get('/', (req, res) => {
    fs.readFile( "./stops.json", "utf-8", function(err, data) {
        res.send(data)
        console.log('data')
    })
});


router.get('/:id', (req, res) => {
    fs.readFile( "./stops.json", "utf-8", function(err, data) {
        const stops = JSON.parse( data );
        const stopid = stops[req.params.id]
        res.send(stopid); 
    })
})

export default router;