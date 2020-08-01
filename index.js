require("dotenv").config();
const express = require("express");
const path = require("path");

const { promises: fs } = require("fs");

const app = express();

const Key = process.env.client_Id;
console.log("please wait");

async function main(){
app.get("/", async (req, res) => {
  const { data } = req.query;
  if (!data) {
    return res.status(401).send("Not authorized");
  }
  const readmeTemplate = (
    await fs.readFile(path.join(process.cwd(), "./README.template.md"))
  ).toString("utf-8");

  const { en: qoth, author: qoth_author } = await (
    await fetch("https://programming-quotes-api.herokuapp.com/quotes/random")
  ).json();

  const {da} = await fetch(
    `http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${Key}`
  ).json();
  
  const {total:val1}=da.article[0].title;
  const {total:val2}=da.article[1].title;
  const {total:val3}=da.article[2].title;
  const {total:val4}=da.article[3].title;
  const {total:val5}=da.article[4].title;
  


  
  return res.send("data has come");
});

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
