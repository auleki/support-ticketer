import { Router } from 'express'
import { getTickets, createTicket, updateTicket, deleteTicket, getSingleTicket } from "../controllers/ticket.controller.js"

const router = Router()

router
    .get("/", getTickets)
    .get("/:id", getSingleTicket)
    .post("/", createTicket)
    .patch("/:id", updateTicket)
    .delete("/:id", deleteTicket)

export default router
