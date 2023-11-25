export interface GetLatestTransactions {
  message: string;
  current_page: number;
  page_size: number;
  next_page_url?: any;
  prev_page_url?: any;
  count: number;
  data: IndividualTransaction[];
}
interface IndividualTransaction {
  created_at: string;
  charged_by: Chargedby;
  charge: Charge;
}
interface Charge {
  amount: number;
  currency: Currency;
  type: string;
}
interface Currency {
  code: string;
  sign: string;
}
interface Chargedby {
  company: string;
  logo: string;
}

export interface SuppliesForecastData {
  actual_value: number;
  forecasted_value: number;
  name: string;
  q1_variance: number;
  q2_variance: number;
  q3_variance: number;
  q4_variance: number;
}

export interface TransactionLogsProps {
  message: string;
  current_page: number;
  page_size: number;
  next_page_url?: any;
  prev_page_url?: any;
  count: number;
  data: IndividualTransactionLog[];
}
interface IndividualTransactionLog {
  date: string;
  salary_paid: number;
  cash_bond_bought: number;
}
