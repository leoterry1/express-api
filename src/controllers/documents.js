import Document from '../models/document.js';
import Owner from '../models/owner.js';
import User from '../models/user.js';
import { removeAttachment } from '../helpers/storage.js';

export const index = async (req, res) => {
    const documents = await Document.find({}).populate({path: 'owner', model: Owner});
    res.json(documents);
};

export const create = async (req, res) => {
    const owner = await Owner.findById(req.body.owner);
    if (!owner) return res.status(404).send();
    const newDocument = new Document({ ...req.body, attachment: req.file.path });
    const document = await newDocument.save();
    console.log(req.file);
    res.status(201).json(document);
};

export const get = async (req, res) => {
    const document = await Document.findById(req.params.id).populate({ path: 'owner', model: Owner })
        .populate({ path: 'users', model: User });
    if (!document) return res.status(404).send();
    res.status(200).json(document);
};

export const update = async (req, res) => {
    const newDocument = { ...req.body, attachment: req.file.path }
    const updatedDocument = await Document.findByIdAndUpdate(req.params.id, newDocument)
    if (!updatedDocument) return res.status(404).send();
    res.status(200).json({ message: 'Documento actualizado correctamente' });
};

export const remove = async (req, res) => {
    const document = await Document.findByIdAndDelete(req.params.id);
    if (!document) return res.status(404).send();
    removeAttachment(document.attachment);
    res.status(200).json({ message: 'Documento eliminado correctamente' });
};

export const associateUsers = async (req, res) => {
    const usersToAdd = await User.find().where('_id').in(req.body.users);
    if (usersToAdd.length === 0) return res.send(404);
    const document = await Document.findByIdAndUpdate(req.params.id, { users: usersToAdd });
    if (!document) return res.status(404).send();
    res.status(200).json({ message: 'Usuarios asociados correctamente' });
};

export const search = async (req, res) => {
    const { name, owner, date } = req.query;
    const createdAt = new Date(date);
    const findByName = name && { name: { '$regex': name, '$options': 'i' }};
    const findByDate = date && { createdAt: {$gt: new Date(date),
        $lt: new Date(createdAt.setDate(createdAt.getDate() + 1))} };
    const findByOwner = owner && { owner: owner };
    const documents = await Document.find().where({...findByName, ...findByDate, ...findByOwner});
    res.status(200).send(documents)
};

export const download = async (req, res) => {
    const { id } = req.params;
    const document = await Document.findById(id);
    if (!document) return res.status(404).send();
    res.download(document.attachment);
}
