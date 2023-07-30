import Ticket from "../models/ticket.model.js";

// create a ticket
export const createTicket = async (req, res) => {
    try {
        const newTicket = new Ticket(req.body)
        const savedTicket = await newTicket.save()
        res.status(201).json({ data: savedTicket })
    } catch (error) {
        res.status(400).json(error)
    }
}

export const getTickets = async (_, res) => {
    try {
        const allTickets = await Ticket.find({})
        res.status(200).json({ data: allTickets })
    } catch (error) {
        res.status(400).json(error)
    }
}

// get single ticket
export const getSingleTicket = async (req, res) => {
    try {
        const ticket = await Ticket.findById(req.params.id)
        res.status(200).json({ data: ticket })
    } catch (error) {
        res.status(400).json(error)
    }
}

// update a ticket
export const updateTicket = async (req, res) => {
    try {
        const options = { new: true }
        const updatedTicket = await Ticket.findByIdAndUpdate(req.params.id, req.body, options)
        const savedTicket = updatedTicket && await updatedTicket.save()
        res.status(200).json({ data: savedTicket })
    } catch (error) {
        res.status(400).json(error)
    }
}

// delete a ticket
export const deleteTicket = async (req, res) => {
    try {
        if (req.params.id) {
            const deletedTicket = await Ticket.findByIdAndDelete(req.params.id)
            res.status(200).json({ data: "Ticket deleted successfully" })
        } else {
            res.status(400).json({ error: "No ID supplied in URL" })
        }
    } catch (error) {
        res.status(400).json(error)
    }
}
