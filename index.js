const { check, body, validationResult } = require('express-validator');
const express = require('express');
const app = new express();

const Complaint_categories = require('./models/complain_categories');
const Contacts = require('./models/contacts');
const supportTicket = require('./models/support_ticket');

// const con = require('./connection');

const port = 3001;
app.use(express.json()); // Middleware
const connection = require('./connection');

app.get('/', (req, res) => {
    res.status(200).send('Welcome to suppoert ticket system')
})

connection.connect()

//=========

const complain_categories = require('./controllers/complanitCategoryController');
const ticketController = require('./controllers/ticketController');

// app.get('/categories',(req,res)=>{
//     connection.query(`SELECT *
//     FROM dcm_complaint_categories`, (err, result)=>{
//         if(err) throw err
//         console.log(result);
//         res.send(result);
//     })

//     // connection.end()
// })


app.get('/addCategories', complain_categories.createNew);
app.get('/categories', complain_categories.listCategories);

app.post('/ticket/add',ticketController.createTicket);


//https://sequelize.org/docs/v6/core-concepts/model-basics/#model-synchronization
Complaint_categories.sync(); //{ alter: true }
Contacts.sync();
supportTicket.sync();

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
