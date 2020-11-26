import mongoose from 'mongoose';

const Schema = mongoose.Schema;
let  hospSchema = new Schema({
    hospitalName: {
        type: String
    }
});
export default mongoose.model('Hospital',hospSchema);