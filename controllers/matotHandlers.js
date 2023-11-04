const { MatOt,Mae04Mat,sequelize } = require('../config/database')
const Sequelize = require('sequelize');


async function getMatOt (req,res){
      
    const {MotCodOdt} = req.query;
       
    
        
if(MotCodOdt){
sequelize.query(`
select a.MotEnlace as 'Codigo',m.Matdes as 'Material',ROUND(a.MotCanKil,2) as 'CantKilos',a.MotCanHoj as 'HjsResma' from produccion.dbo.MatOt a 
left outer join materiales.dbo.Mae04Mat m on a.MotCodMat=m.CodMat where a.MotCodOdt = ${MotCodOdt} `,{type:Sequelize.QueryTypes.SELECT
})
.then(result => {
    

    sequelize.query(`
    select m1.MotCodMat as 'Codigo',m2.Matdes as 'MaterialAd',ROUND(MotCant,2) as 'Cantidad',m1.MotObs as 'Obs' from produccion.dbo.MatAdOt m1 left outer join materiales.dbo.Mae04Mat m2 
    on m1.MotCodMat=m2.CodMat where m2.Matdes <> '' and MotCodOdt= ${MotCodOdt}` ,{type:Sequelize.QueryTypes.SELECT})
    .then(result2 => {  
        console.log(result2);

        
        
        res.status(200).json({Materiales : result, MaterialesAd : result2}); 
    })

}) 
}else{
    
    res.status(204).json({mensaje : "Ingrese Orden"})
}
    
}



module.exports = {
    getMatOt
}