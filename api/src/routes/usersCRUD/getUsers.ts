const initialUsers = require("../../../data/users.json")

export async function getUsers(req: any, res: any) {
    console.log(req)
    res.status(200).send(initialUsers)
}