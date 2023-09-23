const {User} = requiere('../DB_connection.js');
module.export = async (req, res) => {
    try {
        const {email, password} =req.query;
        if (!email || !password) return res.status(400).send("Faltan datos");
        const user = await User.findOne({ where: {email}});
        if(!user) return res.status(404).send("Ususrio no encontrado");

        return user.password === password
        ? res.jason({ access: true})
        : res.status(403).send("Contraseña incorrecta");
    } catch (error) {
        return res.status(500).send(error.message);
    }
};