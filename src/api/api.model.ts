import mongoose from 'mongoose'
import '../database/database'

const stateSchema = new mongoose.Schema({
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    microregion: {
        type: String,
        required: true
    },
    mesoregion: {
        type: String,
        required: true
    }
});

export default mongoose.model('states', stateSchema)