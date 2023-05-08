import User from '../models/user.js';

export const index = async (req, res, next) => {
    const users = await User.find({});
    res.json(users);
};

export const create = async (req, res, next) => {
    const newUser = new User (req.body);
    const user = await newUser.save();
    res.status(200).json(user);
};

export const get = async (req, res) => {
    const user = await User.findById(req.params.id);
    if(!user) return res.status(404).send();
    res.status(200).json(user);
};
