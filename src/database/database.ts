import mongoose from 'mongoose'

class Database {

    constructor() {
        this.database()
    }

    private async database() {
        await mongoose.connect('mongodb://localhost:27017/trav-api', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    }
}

export default new Database()