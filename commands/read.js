import { Command } from "commander";
import chalk from "chalk";

const read= new Command("show <filepath>")
        .description("Display the contents of a file")
        .action(async(filepath)=>{
            try{
                const content = await readFile(filepath,"utf8");
                console.log(content);
            } catch(err){
                console.error(chalk.red("Error reading file:"),err.message);
                process.exit(1);
            }
        });
export default read;