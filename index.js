const express = require('express')
const format = require('date-format');

const app = express()
const PORT = 3001
const User =[ {
    id:0,
    name:"Sangram Behera",
    age:21,
    email:"mailtosangram2018@gmail.com",
    phone:"7608890871",
    created_at :format('dd/MM/yyyy hh:mm:ss', new Date())
},
{
    id:1,
    name:"Sagar Kumar Behera",
    age:31,
    email:"mailtosagar@gmail.com",
    phone:"943774172",
    created_at :format('dd/MM/yyyy hh:mm:ss', new Date())
}
];

app.get('/',(req,res)=>{
   res.status(200).json(User);
});

app.get('/api/v1/:token',(req,res)=>{
    const token1  = req.params.token;
    console.log(token1);
    res.status(200).json({param:token1})
})




app.listen(PORT,()=>{
    console.log(`Application Listening on port ${PORT}`);
})
