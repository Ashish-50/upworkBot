import express from "express";
import routes from './routes/routes.mjs'
import 'dotenv/config';
const app = express();
const {PORT} = process.env;
app.use(express.json());

app.use('/api', routes)

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})