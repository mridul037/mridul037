require("isomorphic-unfetch");
require("dotenv").config();
const express = require("express");
const path = require("path");

const { promises: fs } = require("fs");

const app = express();

const Key = process.env.client_Id;

async function main(){

  
const readmeTemplate = (
  await fs.readFile(path.join(process.cwd(), "./README.template.md"))
).toString("utf-8");


  
  console.log("please wait");
  const { en: qoth, author: qoth_author } = await (
    await fetch("https://programming-quotes-api.herokuapp.com/quotes/random")
  ).json();

  
  
 
    const { articles } =await fetch("http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=077fe507985744818b3f405349c79601").then((res) => res.json());
  
  

 

  const val=[]
  const des=[]
  
  articles.forEach(element => {
    val.push(element.title);
    des.push(element.description);
  })
  
   





  
const readme=readmeTemplate
    .replace("{qoth}", qoth)
    .replace("{qoth_author}", qoth_author)
    .replace("{val1}",val[0])
    .replace("{val2}",val[1])
    .replace("{val3}",val[2])
    .replace("{val4}",val[3])
    .replace("{val5}",val[4])
    .replace("{des1}",des[0])
    .replace("{des2}",des[1])
    .replace("{des3}",des[2])
    .replace("{des4}",des[3])
    .replace("{des5}",des[4])
   
    

    await fs.writeFile("README.md", readme);
    
}
main()
