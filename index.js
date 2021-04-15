const fetch = require("node-fetch");             
const fs = require ("fs");                        
const url = "http://jsonplaceholder.typicode.com/posts";                                      
let jsonString;

fetch(url)
   .then(res=>res.json())
   .then(json=>{
      jsonString = JSON.stringify(json,null,2);
      fs.mkdir("result",err=>{
         if(err){
	    console.log('warnining: A folder named "result" exists already. ');
         }else{
             console.log('A folder named "result" has been created. ');
        }
      });
      fs.writeFile("./result/posts.json",jsonString,"utf8",err=>{
         if(err){
	    console.log(err);
	 }else{
	     setTimeout(_=>{
		console.log("Operation Successfull :)");
                console.log('A file named "posts.json" has been created inside the "result" folder. cd into "./result" to view the file');
	     },1500)
	 }
      });
   })
   .catch(err=>{
      if (err) console.log(err);
   })
