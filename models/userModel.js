import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
const userSchema = mongoose.Schema({

    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,

    },
    Hospital: {
        type: String,
        required: true
    },
    n_ID: {
        type: String,
        required: true
    },
    contactInfo: {
        type: Number,
        min: 0,
        max: 999999999
    },
    isAdmin: {
        type: Boolean,
        required: true
    }


});
 export const user = mongoose.model('user',userSchema);

export const getUserById = function(id,callback){

    user.findById(id,callback);

}

export function getUserbByEmail(Email = new String()){
    const query = {email: Email}
    user.findOne(query, (err, user) =>
    {
        if(err)
        {
            return err;
        }
        else

        {
            return user;
        }
    });

}
export const addUser = function(newUser, callback){
    bcrypt.genSalt(10,(err,salt) => {
        bcrypt.hash(newUser.password, salt, (err,hash)=> {

            if(err) throw err;
            newUser.password = hash;
            newUser.save(callback);

        });
    });

}
export const comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword,hash,(err, isMatch)=> {
        if(err) throw err;


        callback(null,isMatch);


    });




}