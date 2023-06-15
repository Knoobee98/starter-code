module.exports = {
    signIn: async(req, res) => {
        res.status(201).send({
            isError: false,
            message: "sign in successfull",
            data: null
        })
    }
}