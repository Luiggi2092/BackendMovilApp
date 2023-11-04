require("dotenv").config();
const { DataTypes,Sequelize,Op } = require('sequelize');
const {DB_USER, DB_PASSWORD, DB_HOST,DB_NAME,DB_PORT,DB_NAME1,DB_URL,DB_USERDEPLOY,DB_PASSWORDDEPLOY,DB_INSTANCE_NAME} = process.env
const fs = require("fs");
const path = require("path");

const local = false;

const sequelize = local === true? new Sequelize(DB_NAME,DB_USER,DB_PASSWORD,{
    host:DB_HOST,
    dialect: 'mssql',
    port:DB_PORT,
    native: false,
    logging:false,


}): new Sequelize(DB_NAME,DB_USERDEPLOY,DB_PASSWORDDEPLOY,{
    host:DB_URL,
    dialect: 'mssql',
    port: 1433,
    native:true,
    logging:true
})


const sequelize1 = local == true? new Sequelize(DB_NAME1,DB_USER,DB_PASSWORD,{
    host:DB_HOST,
    dialect: 'mssql',
    port:DB_PORT,
    native:false,
    logging:false,


}): new Sequelize(DB_NAME1,DB_USERDEPLOY,DB_PASSWORDDEPLOY,{
  host:DB_URL,
  dialect: 'mssql',
  port:1433,
  native:true,
  logging:true
})



   const Mae04Mat = sequelize1.define('Mae04Mat', {
    CodMat : {
        type: DataTypes.INTEGER,
        primaryKey:true,
  },
    Matdes : {
        type: DataTypes.STRING,

  }
  },{ timestamps: false,
    freezeTableName: true,
     }
  );

  
const MatOt = sequelize.define('MatOt',{
    MotCodOdt : {
        type:DataTypes.STRING,
        primaryKey:true
        
      },
    MotCodMat : {
        type: DataTypes.INTEGER,
        allowNull: false
        
      },
},
{ timestamps: false,
  freezeTableName: true,
   },);

// const basename = path.basename(__filename);
 //const modelDefiners = [];

// fs.readdirSync(path.join(__dirname, '../models'))
//   .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
//   .forEach((file)=> {
//      modelDefiners.push(require(path.join(__dirname, '../models',file)));
//   });

//    modelDefiners.forEach(model => {
//      model(sequelize,sequelize1)
//    })


//   let entries  = Object.entries(sequelize.models,sequelize1.models);
//   let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1),entry[1]]);

 //  sequelize.models,sequelize1.models = Object.fromEntries(capsEntries);
  


//  const { Mae04Mat,MatOt} = sequelize.models  

//  MatOt.hasMany(Mae04Mat, {foreignKey:{ name:'CodMat'} // Nombre de la columna en Comentario que actuará como clave foránea
//});



module.exports = { MatOt,Mae04Mat,conn: sequelize, sequelize,conn:sequelize1,sequelize1}