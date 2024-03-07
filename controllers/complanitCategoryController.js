
const Complaint_categories = require('../models/complain_categories');

const createNew = async(req,res) => {
    const newCategory = await Complaint_categories.create({
        name : 'Order Related',
        description : 'Order related category',
        dcm_organization_id : 1,
    })

    res.status(200).json(newCategory);
}

var listCategories = async(req, res) => {
    const categories = await Complaint_categories.findAll();
    console.log(categories);
    res.status(200).json(categories);
}

module.exports = {
    listCategories,
    createNew
}