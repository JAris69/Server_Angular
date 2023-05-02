import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('almacen', 'postgres', 'Arismendii0', {
    host: 'localhost',
    dialect: 'postgres'
  });


  
  export default sequelize;

  