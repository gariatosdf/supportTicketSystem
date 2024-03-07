const supportTicket = require('../models/support_ticket');

const createTicket = async(req,res)=>{
    const newTicket = await supportTicket.create(req.body);
    console.log(req.body);
    res.send(newTicket);
}


module.exports = {
    createTicket
}