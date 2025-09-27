#!/usr/bin/env node

import { program } from "commander";
import inquirer from "inquirer";
import figlet from "figlet";
import chalk from "chalk";

console.log(chalk.yellow(figlet.textSync("mycli",{horizontalLayout:"full"})))

console.log("You are now using mycli, a custom cli");


import battery from "../commands/battery.js";
import ip from "../commands/ip.js";
import fetchUrl from "../commands/fetch.js";
import read from "../commands/read.js";


program.version("1.0.0").description("My custom made  CLI");

program.action(()=>{
    inquirer.prompt([
        {
            type:"input",
            name:"name",
            message:"Enter your name!"
        },
    ])
    .then((answers)=>{
        console.log(chalk.green(`Hello,${answers.name}!`));
    });
});



program.addCommand(battery);
program.addCommand(fetchUrl);
program.addCommand(ip);
program.addCommand(read);

program.parse(process.argv);
