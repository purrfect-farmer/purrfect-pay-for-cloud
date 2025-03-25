import { paystack } from "./paystack";

window.addEventListener("message", (ev) => {
  paystack.resumeTransaction(ev.data.accessCode, {
    onSuccess: async (transaction) => {
      ev.source.postMessage({
        event: "onSuccess",
        data: transaction,
      });
    },
    onLoad: (response) => {
      ev.source.postMessage({
        event: "onLoad",
        data: response,
      });
    },
    onCancel: () => {
      ev.source.postMessage({
        event: "onCancel",
      });
    },
    onError: (error) => {
      ev.source.postMessage({
        event: "onError",
        data: error,
      });
    },
  });
});
