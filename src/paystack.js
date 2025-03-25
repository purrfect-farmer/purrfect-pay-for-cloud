import Paystack from "@paystack/inline-js";

const paystack = new Paystack();

window.paystack = paystack;

export { paystack };
