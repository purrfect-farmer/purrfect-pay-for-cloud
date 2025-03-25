import { getAccessCode } from "./utils";
import { paystack } from "./paystack";

const accessCode = getAccessCode();

paystack.resumeTransaction(accessCode);
