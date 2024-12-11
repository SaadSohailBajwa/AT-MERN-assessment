require("dotenv").config();
const password = process.env.dbPassword;

const URI = `mongodb+srv://admin:${password}@cluster0.5o9vq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

module.exports = URI