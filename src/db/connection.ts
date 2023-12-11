import { Sequelize } from 'sequelize';
import { DB_HOST,DB_NAME,DB_PASSWORD,DB_USER,DB_URL } from '../config';


const sequelize = new Sequelize(DB_URL, {})

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