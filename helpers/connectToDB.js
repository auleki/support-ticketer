import mongoose from 'mongoose'
import { app } from '../server.js'

export async function connectToDatabase() {
    try {
        const PORT = process.env.PORT || 4500
        const DB_URL = process.env.MONGODB_URL || ""
        mongoose.set('strictQuery', false)
        // connect to database
        mongoose.connect(DB_URL)
        // spin up application server
        app.listen(PORT, () => console.log(`Server up at http://localhost:${PORT}`))
    } catch (error) {
        // handle errors connecting to database
        console.error('Error connecting to db', error)
    }
}
