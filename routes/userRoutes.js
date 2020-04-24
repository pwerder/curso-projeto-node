const fs = require('fs');
const { join } = fs;

const filePath = join(__dirname, 'users.json');

const getUsers = () => {
    const data= fs.existSync(filePath)
        ? fs.readFileSync(filePath)
        : []
    try {
        return JSON.parse(data)
    } catch (error) {
        return []
    }
}

const saveUser = (users) => fs.writeFileSync(filePath, JSON.stringify(users, null, '\t'))

const userRoute = (app) => {
    app.route('/users/:id?')
        .get((req, res) => {
            const users = getUsers()
            res.send({ users })
        })
}

module.exports = userRoute