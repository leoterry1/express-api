import mongoose, { Schema } from 'mongoose';

export const VALID_TYPES = ['Público', 'Privado', 'Draft'];


const documentSchema = Schema({
    name: {
        type: String,
        required: true
    },
    documentType: {
        type: String,
        required: true,
        validate(value){
            if (!VALID_TYPES.includes(value)){
                throw new Error('El tipo de documento debe ser Público, Privado o Draft.');
            }
        }
    },
    attachment: {
        type: String,
        required: true
    },
    description: String,
    owner: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'owner'
    },
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }]
},
{ timestamps: true });

export default mongoose.model('Document', documentSchema);
