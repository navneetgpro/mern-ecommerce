const express = require('express');
const config = require('config');
const router = express.Router();
const User = require("../../models/User");
const auth = require('../../middleware/auth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');

// @route   GET api/auth/
// @desc    Get auth user
// @access  Private

router.get('/', auth, async (req, res) => {
    try{
        const user = await User.findById(req.user.id).select('-password');
        res.status(200)
        .json({status: "success",user:user});
    } catch(err){
        console.log(err.message);
        return res.status(500)
        .send("Server error");
    }
});

// @route   POST api/auth
// @desc    Authenticate user & get token
// @access  Public

router.post('/',[
    check('email','Email is required').isEmail(),
    check('password','Password is required').exists(),
], async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400)
        .json({errors:errors.array()});
    }

    const { email, password } = req.body;
    try{
        let user = await User.findOne({email});

        if(!user){
            return res.status(400)
            .json({errors:[{msg:"Invalid credentails"}]});
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(400)
            .json({errors:[{msg:"Invalid credentails"}]});
        }

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