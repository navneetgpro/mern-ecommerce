const express = require('express');
const multer = require('multer');
const router = express.Router();
const Product = require("../../models/Product");
const path = require('path');

//Configuration for Multer
const multerStorage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, 'Images');
    },
    filename: (req, file, cb) =>{
        // console.log(file);
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
// Multer Filter
const multerFilter = (req, file, cb) => {
    // if (file.mimetype.split("/")[1] === "png") {
    if (['png','jpg','jpeg'].includes(file.mimetype.split("/")[1])) {
      cb(null, true);
    } else {
      cb(new Error("Must be image file!!"), false);
    }
  };

const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter
});


// @route   GET api/product
// @desc    Get product data
// @access  Public
router.get('/id/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);
    return res.status(200).json({message: "Data fetched",product:product});
});

// @route   GET api/product/search
// @desc    Search products
// @access  Public
router.get('/search', async (req, res) => {
    const s = req.query.s;
    let query = {};
    let products = {};
    if(s){
        query.name = s;
        products = await Product.find({ name: { $regex: s } });
    }

    // send data
    return res.status(200).json({message: "Data fetched",products:products});
});

// @route   POST api/product/save
// @desc    Add new product
// @access  Public

const image = upload.single('image');

router.post('/save', (req,res) => {
    image(req, res, async function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(400).json({
                status: "failed",
                message: err.message,
            });
        } else if (err) {
            return res.status(400).json({
                status: "failed",
                message: err.message,
            });
        }

        try {
            const newFile = await Product.create({
                image: req.file.path,
                name: req.body.name,
                badge: req.body.badge,
                price: req.body.price,
                desc: req.body.desc,
            });
            return res.status(200).json({
                status: "success",
                message: "File created successfully!!",
            });
        } catch (error) {
            return res.status(500)
            .send(error.message);
        }
    })
});

module.exports = router;