import express from 'express';
import Routes from './routes/index'


const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(Routes);

app.listen(PORT, ()=> {
    console.log(`RUNNING ON PORT: ${PORT}`);
});
