module.exports= (req, res) => {
    try {
        const {id} = req.user;

        res.redirect(`users/${id}`);
    }catch (e) {
        res.json(e.message)
    }
};