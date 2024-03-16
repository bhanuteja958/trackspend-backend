import 'dotenv/config';
import express, { Express } from "express";
import cors from "cors";


const app: Express = express();

app.use(
    cors({
        origin: "localhost",
    })
);

app.use(express.json());

const PORT: number = parseInt(process.env.PORT) || 5000;

app.listen(PORT, () => {
    console.info(`Server listening on port ${PORT}`);
});
