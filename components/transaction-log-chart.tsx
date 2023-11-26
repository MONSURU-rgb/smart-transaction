import { builder } from "@/api/builder";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

function formatNumberInMillions(number: number) {
  if (typeof number !== "number") return;

  const million = 1000000;
  const result = number / million;

  const roundedResult = Math.round(result);
  return `${roundedResult}`;
}

export function AreaBarChart() {
  const { data: getTransactionLogs } = useQuery({
    queryFn: () => builder.use().requests.get_transaction_logs(),
    queryKey: builder.requests.get_transaction_logs.get(),
    select: ({ data }) =>
      data?.data?.map((list) => ({
        name: dayjs(list?.date).format("DD MMM"),
        uv: formatNumberInMillions(list?.cash_bond_bought),
        pv: formatNumberInMillions(list?.salary_paid),
        amt: formatNumberInMillions(list?.salary_paid),
      })),
  });

  return (
    <ResponsiveContainer width="100%" height={278}>
      <AreaChart
        data={getTransactionLogs}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#AF9CED" stopOpacity="0.19" />
            <stop offset="0.998978" stopColor="#AF9CED" stopOpacity="0.01" />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" color="white" />
        <YAxis dataKey="pv" />

        <Area
          type="monotone"
          dataKey="uv"
          stroke="#FFBC02"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="pv"
          stroke="#876AFE"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
