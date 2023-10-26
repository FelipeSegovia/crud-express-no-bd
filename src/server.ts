import 'dotenv/config'
import express, {Express, Response} from "express";
import morgan from "morgan";
import usersRoutes from "./infrastructure/routes/users.routes"

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(morgan('common'));
app.use(usersRoutes)


app.listen(port,() => {
  console.log(`Server running in http://localhost:${port}`)
})