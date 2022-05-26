import {foo} from "./theme.js";
import {saleTimeCounter} from "./sale.js";
import {runModalWindow} from "./modal.js";
import {header} from "./header.js";
import {setDataFromConfig} from "./setDataFromConfig.js";

const app = () => {
    setDataFromConfig()
    runModalWindow()
    header()
    foo()
    saleTimeCounter()
};

document.addEventListener("DOMContentLoaded", app);