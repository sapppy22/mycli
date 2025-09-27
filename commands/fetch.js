import {Command} from "commander";
import chalk from "chalk";
import fetch from "node-fetch";

const fetchUrl= new Command("fetch")
.description("Fetch content from a URL ")
.argument("<url>","URL to fetch")
.action(async(url)=>{
    try{
        const res = await fetch(url);
        const content = await res.text();

        console.log(chalk.green("Fetched Content Successfully✅"))

    } catch(err){
        console.error(chalk.red("Error fetching URL:"),err.message);
    }
});

export default fetchUrl;