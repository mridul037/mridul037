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

  const da = await(
    await fetch("http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=077fe507985744818b3f405349c79601")
  ).json();
  // console.log(da);
  const val1=da.articles[0].title;
  const val2=da.articles[1].title;
  const val3=da.articles[2].title;
  const val4=da.articles[3].title;
  const val5=da.articles[4].title;
  
  const des1=da.articles[0].title;
  const des2=da.articles[1].title;
  const des3=da.articles[2].title;
  const des4=da.articles[3].title;
  const des5=da.articles[4].title;
  


  
  

const readme=readmeTemplate
    .replace("{qoth}", qoth)
    .replace("{qoth_author}", qoth_author)
    .replace("{val1}",val1)
    .replace("{val2}",val2)
    .replace("{val3}",val3)
    .replace("{val4}",val4)
    .replace("{val5}",val5)

    await fs.writeFile("README.md", readme);
    
}
main()
