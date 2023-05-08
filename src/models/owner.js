import mongoose, { Schema } from 'mongoose';


const ownerSchema = Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    documents: [{
        type: Schema.Types.ObjectId,
        ref: 'document'
    }]
});

export default mongoose.model('Owner', ownerSchema);
