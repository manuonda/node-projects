const all = (req, res) => {
    res.status(200).json({message : 'hola mundo'});
}

module.exports = {all};