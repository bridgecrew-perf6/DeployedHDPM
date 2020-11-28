import express from 'express';
const router = express.Router();
import passport from 'passport';
import jsonwebtoken from 'jsonwebtoken';
import { secret } from '../config/db.js';
import bcrypt from 'bcryptjs';


import { user, addUser, comparePassword } from '../models/userModel.js';

// Register route

router.post('/register', (req, res) => {

    console.log(req);

    let newUser = new user({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        Hospital: req.body.Hospital,
        contactInfo: req.body.contactInfo,
        isAdmin: req.body.isAdmin


    });
    addUser(newUser, (err) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to register user, Invalid input' });

        }
        else {
            res.json({ success: true, msg: 'User Registered' });
        }
    });
});
// Authenticate/Login
router.post('/authenticate', (req, res) => {
    user.findOne({ email: req.body.email }, (err, user) => {
        if (err || user == null) {
            return res.json({ success: false, msg: 'Invalid Credentials' });
        }
        else {
            comparePassword(req.body.password, user.password, (err, isMatch) => {
                if (err) { return res.json({ success: false, msg: 'Invalid Credentials' }); }
                if (isMatch) {
                    const token = jsonwebtoken.sign({ data: user }, secret, {
                        expiresIn: 10800
                    });

                    res.json({
                        success: true,
                        token: "JWT " + token,
                        user: {
                            id: user._id,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            email: user.email,
                            Hospital: user.Hospital,
                            n_ID: user.n_ID,
                            contactInfo: user.contactInfo,
                            isAdmin: user.isAdmin
                        }
                    });
                }
                else {
                    return res.json({ success: false, msg: 'Invalid Credentials' });
                }
            });
        }
    });
});


router.route('/email').post((req, res) => {
    user.findOne({ email: req.body.email }, (err, user) => {
        if (user) {
            res.json(user);
        }
        else
        {
            res.json(null);
        }
    });
});

router.route('/id').post((req, res) => {
    user.findOne({ email: req.body.email }, (err, user) => {
        if (user) {
            res.json(user._id);
        }
        else
        {
            res.json(null);
        }
    });
});

//update by ID route
router.route('/update/account/:id').post((req, res) => {
    user.findById({ _id: req.params.id }, (err, user) => {
        if (err) {
            res.json(err);
        }
        else {
            user.updateOne(req.body).then(() => {
                res.status(200).json({ 'user': 'updated successfully' });
            }).catch(() => {
                res.status(400).send('Failed to update user');
            })
        }
    });
});

router.route('/all').get((req,res ) => {
    user.find((err, users) => {
        if(err) { res.json(err); }
        else
        {
            res.json(users);
        }
    });
});
router.route('/hospital').post((req, res) => {
    user.find({ Hospital: req.body.Hospital }, (err, users) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(users);
        }
    });
});

router.route('/update/password/:id').post((req, res) => {
    user.findById({ _id: req.params.id }, (err, user) => {
        if (err) {
            res.json(err);
        }
        else {
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(req.body.password, salt, (err, hash) => {

                    if (err) { res.json(err); }
                    else {
                        var pass = hash;
                        user.updateOne({ $set: { "password": pass } }).then(() => {
                            res.status(200).json({ 'password': 'updated successfully' });
                        });
                    }

                });
            });
        }
    })
});
//Profile

router.route('/delete/:id').get((req, res) => {


    user.findByIdAndRemove({ _id: req.params.id }, (err) => {


        if (err) {
            res.json(err);
        }
        else {
            res.json('Removed successfully');
        }
    });
});

router.get('/account', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({ user: req.user })
});

export default router;