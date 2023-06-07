const Appliance  = require('../models')
const db = require('../db')

const getAllAppliances = async (req, res) => {
    try {
        const appliances = await Appliance.find()
        return res.status(200).json({ appliances })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getApplianceById = async (req, res) => {
    try {
        const { id } = req.params
        const appliance = await Appliance.findById(id)
        if(appliance) {
            return res.status(200).json({ appliance })
        }
        return res.status(404).send('appliance does not exist')
    }catch (e){
        return res.status(500).send(e.message)
    }
}

const getAppliancesByType = async (req, res) => {
    try {
        const { value } = req.params
        const appliances = await Appliance.find({ type: value })
        if(appliances) {
            return res.status(200).json({ appliances })
        }
        return res.status(404).send('no appliances of that type')
    }catch (e){
        return res.status(500).send(`${e.message} line 35`)
    }
}

const createAppliance = async (req, res) => {
    try{
        const appliance = await new Appliance(req.body)
        await appliance.save()
        return res.status(201).json({
            appliance,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}


const updateAppliance = async (req, res) => {
    try {
        let { id } = req.params;
        let appliance = await Appliance.findByIdAndUpdate(id, req.body, { new: true})
        if (appliance) {
            return res.status(200).json(appliance)
        }
        throw new Error("Appliance not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


const deleteAppliance = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Appliance.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Appliance deleted");
        }
        throw new Error("Appliance not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
module.exports = {
    getAllAppliances, 
    getApplianceById,
    getAppliancesByType,
    createAppliance,
    updateAppliance,
    deleteAppliance
}