const bcrypt = require('bcrypt');
const User = require('../model/User');

const handleNewUser = async (req, res) => {
    const { user, pwd } = req.body;
    if(!user || !pwd) return res.status(400).json({ 'message': 'Username and password are required.' });

    //exec cuz there's no cb n we r in async fn
    const duplicate = await User.findOne({ username: user }).exec();
    if(duplicate) return res.sendStatus(409); //Conflict
    try {
        const hashedPwd = await bcrypt.hash(pwd, 10);
        //create n store the new user
        const result = await User.create({ 
            "username": user,
            "password": hashedPwd 
        });

        console.log(result);
        
        res.status(201).json({ 'success': `New user ${user} created!` });
    } catch(err) {
        res.status(500).json({ 'message': err.message });
    }
};

module.exports = { handleNewUser };