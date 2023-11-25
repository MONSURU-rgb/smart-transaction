import { createBuilder } from "@ibnlanre/portal";
import { API } from "./axios-config";
import { GetLatestTransactions, TransactionLogsProps } from "@/types";

export const builder = createBuilder({
  requests: {
    get_latest_transactions: () =>
      API.get<GetLatestTransactions>("/api/v1/transactions/latest"),
    get_supplies_forecast: () => API.get("/api/v1/supplies/forecast"),
    get_transaction_logs: () =>
      API.get<TransactionLogsProps>("/api/v1/transactions/payout-logs"),
    get_transactions_overview: () => API.get("/api/v1/transactions/overview"),
  },
});
