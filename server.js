import express from 'express'
import * as dotenv from 'dotenv'
import { connectToDatabase } from './helpers/connectToDB.js'
import ticketRoutes from "./routes/ticket.route.js"
dotenv.config()
export const app = express()

app.use(express.json())

connectToDatabase()
app.use('/tickets', ticketRoutes)
