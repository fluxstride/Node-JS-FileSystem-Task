const fetch = require("node-fetch");
const fs = require ("fs");
const url = "http://jsonplaceholder.typicode.com/posts";
let jsonString;

fetch(url)
   .then(res=>res.json())
   .then(json=>{                                         
       jsonString = JSON.stringify(json,null,2);         
       fs.mkdir("result",err=>{
          if(err) throw err
       })
       fs.writeFile("./result/posts.json",jsonString,err=>{   
          if(err) throw err;
       })
   })                                            
   .then(_=>{
       console.log(`"posts.json" file has been created succesfully \n cd into "./result" to see the file`)
   })
   .catch(err=>{
       if (err) throw err
   })
