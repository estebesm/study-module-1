import {theme} from "./theme.js";
import {saleTimeCounter} from "./sale.js";
import {runModalWindow} from "./modal.js";
import {header} from "./header.js";
import {setDataFromConfig} from "./setDataFromConfig.js";
import "../styles/main.css";

const app = () => {
    setDataFromConfig();
    runModalWindow();
    header();
    theme();
    saleTimeCounter();
};

document.addEventListener("DOMContentLoaded", app);