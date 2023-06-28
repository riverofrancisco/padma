const server = require("./build/app.js");
const { conn } = require("./build/db.js");

const { DB_PORT } = process.env;
const PORT = DB_PORT || 5432;

const defaultProducts = require("./data/products.json")
const {postProducts} = require("./data/postInfo.js")

conn.sync({ force: true }).then(() => {
server.listen(PORT, ()=> {
    console.log(`listening on port ${PORT}`);
    defaultProducts.map((product) => {
        return postProducts(product);
    })
    })
});