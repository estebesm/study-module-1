import {foo} from "./theme.js";
import {saleTimeCounter} from "./sale.js";

const app = () => {
    foo()
    saleTimeCounter()
};

document.addEventListener("DOMContentLoaded", app);