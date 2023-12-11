import { Sequelize } from 'sequelize';
import { DB_PORT,DB_HOST,DB_NAME,DB_PASSWORD,DB_USER } from '../config';


const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: Number(DB_PORT),
  dialect: 'mysql'
})

async function testConection() {
  try {
    
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testConection();

export default sequelize;