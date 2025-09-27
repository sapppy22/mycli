import {Command} from "commander";
import chalk from "chalk";
import fetch from "node-fetch";

const ip= new Command("ip").description("Show public IP address")
          .action(async()=>{
            try{
                const res = await fetch("https://api.ipify.org?format=json");
                const data = await res.json();
                console.log(chalk.green(`Your IP:${data.ip}`));
            } catch (err){
                console.error(chalk.red("Failed to fetch IP address"),err.message);
            }
          });

export default ip;
