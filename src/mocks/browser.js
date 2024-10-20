import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";

console.warn("============= Mocking Files Included in Bundle =============");
export const worker = setupWorker(...handlers);
