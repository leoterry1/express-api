import mongoose, { Schema } from 'mongoose';


const userSchema = Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    idNumber: {
        type: String,
        required: true
    },
    document: {
        type: Schema.Types.ObjectId,
        ref: 'document'
    }
});

export default mongoose.model('User', userSchema);
