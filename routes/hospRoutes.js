import express from 'express';
const router = express.Router();


import Hospital from '../models/hospitalModel.js';

router.route('/').get((req, res) => {
    Hospital.find((err,Hospitals) => {
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(Hospitals);
            
        }
    });
});

router.route('/add').post((req, res) => {
    let newHosp = new Hospital(req.body);
    newHosp.save().then(newHosp => {

        res.status(200).json({ 'Hospital': 'Added successfully' });
    })
    .catch(err => {

        res.status(400).send('Failed to create new Hospital');
    });

});

router.route('/delete').post((req, res) => {
    Hospital.findOneAndDelete({ hospitalName: req.body.hospitalName}, (err) => {
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json('Removed successfully');
        }
    });

});

export default router;