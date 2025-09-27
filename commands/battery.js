import { Command } from "commander";
import chalk from "chalk";
import si from "systeminformation";

const battery=new Command("battery").description("Show battery description")
.action(async()=>{
    try{
        const info = await si.battery();
        console.log(chalk.green("Battery life and time remaining:"));
        
        const percent=info.percent;
        console.log(percent)

  

    }catch(err){
        console.error(chalk.red("Battery info cannot be provided "));
    }
});

export default battery;