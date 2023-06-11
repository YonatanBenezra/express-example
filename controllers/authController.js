const User = require('../models/user');

exports.users = (req, res) => {
    User.find({}).then((data) => {
        res.send(data)
    })
}

exports.register = (req, res) => {
    const newUser = new User(req.body);
    newUser.save((err, user) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(201).json({ message: `User created successfully ${user}` });
    });
};

// exports.login = (req, res) => {
//     User.findOne({ email: req.body.email, password:req.body.password }, (err, user) => {
//         if (err) {
//             res.status(500).send(err);
//         }
//         if (!user) {
//             res.status(404).send({ message: 'User not found' });
//         } else {
//             res.status(200).json({message: `User logged in successfully ${user}`});
//         }
//     });
// }



// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');


//      exports.register = async(req, res) => {
//         const { email, password } = req.body;
//         const salt = bcrypt.genSaltSync(10);
//         const hash = bcrypt.hashSync(password, salt);
//         const newUser = new User({ email, password: hash });
//         newUser.save((err, user) => {
//             if (err) {
//                 return res.status(500).json({ message: err });
//             }
//             const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
//             res.json({ token });


            
//         });
//     },
//      exports.login = async(req, res) => {
//         const { email, password } = req.body;
//         User.findOne({ email }, (err, user) => {
//             if (err || !user) {
//                 return res.status(401).json({ message: 'Invalid email or password' });
//             }
//             bcrypt.compare(password, user.password, (err, isMatch) => {
//                 if (err || !isMatch) {
//                     return res.status(401).json({ message: 'Invalid email or password' });
//                 }
//                 const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
//                 res.json({ token });
//             });
//         });
//     }
