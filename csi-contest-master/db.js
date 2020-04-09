//importing to database
const db=require('mongodb').MongoClient

//database object
var dataBaseObj;
var userCollection;
var adminCollection;
function initDb()
{
    db.connect('mongodb://pullurivineeth:koushik1234@cluster0-shard-00-00-vydmu.mongodb.net:27017,cluster0-shard-00-01-vydmu.mongodb.net:27017,cluster0-shard-00-02-vydmu.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true},(err,db)=>{
if(db==undefined)
{
    console.log('error in connecting to database');
}
else
{
    console.log('connected to database');
    dataBaseObj=db.db('mydb');
    adminCollection=dataBaseObj.collection('admincollection');
    userCollection=dataBaseObj.collection('usercollection');
}
});
}


function getDb()
{
    return {adminCollection:adminCollection,userCollection,userCollection};
}

module.exports={initDb,getDb};