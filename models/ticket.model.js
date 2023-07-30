import { Schema, model } from 'mongoose'

const TicketSchema = new Schema({
    topic: {
        type: String,
        required: true,
    },
    details: {
        type: String,
        required: true,
    },
    resolved: {
        type: Boolean,
        default: false
    },
    assignedTo: {
        type: Array,
    }
}, { timestamps: true })

TicketSchema.set('toJSON', {
    transform: (document, returnedObj) => {
        returnedObj.id = returnedObj._id.toString()
        delete returnedObj._id
        delete returnedObj.__v
    }
})

export default model('Ticket', TicketSchema)
