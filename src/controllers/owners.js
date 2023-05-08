import Owner from '../models/owner.js';

export const index = async (req, res, next) => {
    const owners = await Owner.find({});
    res.json(owners);
};

export const create = async (req, res, next) => {
    const newOwner = new Owner (req.body);
    const owner = await newOwner.save();
    res.status(200).json(owner);
};

export const get = async (req, res) => {
    const owner = await Owner.findById(req.params.id);
    if(!owner) return res.status(404).send();
    res.status(200).json(owner);
};
