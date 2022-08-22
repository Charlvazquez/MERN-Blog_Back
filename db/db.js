import {Sequelize} from 'sequelize'



const db = new Sequelize('db_mern', 'root', '',{
    host:'localhost',
    dialect: 'mysql',
    define: {
        timestamps: true,
        freezeTableName: true
      },
      logging: false
})

export default db