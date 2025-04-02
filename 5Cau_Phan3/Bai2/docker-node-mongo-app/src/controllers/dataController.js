const Data = require('../models/dataModel');

// Create a new data entry
exports.createData = async (req, res) => {
    try {
        const data = new Data(req.body);
        await data.save();
        res.status(201).send(data);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get all data entries
exports.getAllData = async (req, res) => {
    try {
        const data = await Data.find();
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get a single data entry by ID
exports.getDataById = async (req, res) => {
    try {
        const data = await Data.findById(req.params.id);
        if (!data) {
            return res.status(404).send();
        }
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update a data entry by ID
exports.updateData = async (req, res) => {
    try {
        const data = await Data.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!data) {
            return res.status(404).send();
        }
        res.status(200).send(data);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete a data entry by ID
exports.deleteData = async (req, res) => {
    try {
        const data = await Data.findByIdAndDelete(req.params.id);
        if (!data) {
            return res.status(404).send();
        }
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);
    }
};