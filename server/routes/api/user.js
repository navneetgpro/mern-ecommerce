const express = require('express');
const config = require('config');
const router = express.Router();
const gravatar = require('gravatar');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require("../../models/User");
const auth = require('../../middleware/auth');

// @route   GET api/user/shipping
// @desc    Get shipping address
// @access  Private

router.get('/shipping', auth, async (req, res) => {
    try{
        const user = await User.findById(req.user.id).select('shipping');
        res.status(200)
        .json({status: "success",data:user});
    } catch(err){
        console.log(err.message);
        return res.status(500)
        .send("Server error");
    }
});

// @route   PUT api/user/shipping
// @desc    Update or create shipping
// @access  Private

router.put('/shipping',auth, [
    check('address','address is required').notEmpty(),
    check('loc','loc is required').notEmpty(),
    check('state','state is required').notEmpty(),
    check('pincode','invalid pincode').isLength({ min: 6, max:6 }),
    ], async (req, res) => {
        // check validations
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400)
            .json({errors:errors.array()});
        }

        let newShipping = {address, loc, state, pincode} = req.body;
        let update = {};
        update.shipping = newShipping;

        const filter = { _id: req.user.id };
        try{
            const user = await User.findOneAndUpdate(filter, update, {new: true})
            return res.status(200).json(user);
            // return res.status(200).json({ msg: "Shipping updated" })
        } catch(err) {
            console.log(err.message);
            return res.status(500).send('server error')
        }
});

// @route   POST api/user/save
// @desc    Add new user
// @access  Public

router.post('/register',[
    check('name','Name is required').notEmpty(),
    check('email','Please enclude a valid email').isEmail(),
    check('password','Please enter a password with 6 or more charactors').isLength({min:6}),
    check('confirmpassword').custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error('Password confirmation does not match password');
        }
        return true;
      }),
], async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400)
        .json({errors:errors.array()});
    }

    const { name, email, password } = req.body;
    try{
        let user = await User.findOne({email});

        if(user){
            return res.status(400)
            .json({errors:[{msg:"User alredy exists"}]});
        }

        const avatar = gravatar.url(email, {
            s: '200', // Size
            r: 'pg', // Rating
            d: 'mm' // Default
          });

        user = new User({
            name,email,avatar,password
        });

        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password,salt);

        await user.save();

        const payload = {
            user:{
                id:user.id
            }
        }

        jwt.sign(
            payload,
            config.get('jwtSecret'),
            { expiresIn:36000 },
            (err,token) => {
                if(err) new Error(err);
                return res.status(200).json({token});
            }
        )
    } catch(err){
        console.log(err.message);
        return res.status(500)
        .send("Server error");
    }
});

module.exports = router;