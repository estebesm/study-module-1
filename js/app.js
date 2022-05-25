import {foo} from "./theme.js";
import {saleTimeCounter} from "./sale.js";
import {runModalWindow} from "./modal.js";
import {header} from "./header.js";

const app = () => {
    runModalWindow()
    header()
    foo()
    saleTimeCounter()
};

document.addEventListener("DOMContentLoaded", app);