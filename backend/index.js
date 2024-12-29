import express from 'express';
import axios from "axios";
// import cors from 'cors';
// import dotenv from 'dotenv';
import bodyParser from 'body-parser';

const PORT = 3200;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());

app.get("/", (req, res) => {
    console.log('request is coming');
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));