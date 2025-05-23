require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_URL)


const main = async () => {
  try {
    await sequelize.authenticate();
    console.log("Sequelize authenticated successfully.");
    sequelize.close()
  } catch (error) {
    console.log('Unable to connect', error)
  }
}

main()