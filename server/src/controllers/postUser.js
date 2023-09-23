const {User} = requiere('../DB_connection.js');

module.export = async (req, res) => {
    try {
        const {email, password} = req.body;
        if (!email || !password) return res.status(400).send("Faltan datos");

        const user = await User.findOrCreate({where: {email, password}});
        return res.jason(user);
    } catch (error) {
        return res.status(500).jason(error.message);
    }
};