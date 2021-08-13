exports.getStuff = (req, res) => {
    res.json([
        {
            name: 'Thing1'
        },
        {
            name: 'Think2'
        }
    ])
};