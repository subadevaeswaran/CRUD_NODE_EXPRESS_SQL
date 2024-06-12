import express from 'express'
import cors from 'cors';
import mysql from 'mysql';

const app = express();
app.use(cors());

const db =mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"root@123",
    database:"crud"
});

//test the database is connected or not
db.connect((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("MySql connected");
    }
})


app.get('/' , (req,res)=>{
    const sql = "SELECT * FROM students";
    db.query(sql,(err,result)=>{
        if(err) {console.error("Error in fetching data" , err.stack);
            res.status(500).send('error in fetching');
            return;
        }
        res.send(result);
        
    })
})

app.listen(8080 , (req,res)=>{
    console.log("Server is running on port 8080");
})