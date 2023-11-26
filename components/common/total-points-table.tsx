import { API } from "@/api/axios-config";
import { builder } from "@/api/builder";
import { SuppliesForecastData } from "@/types";
import { Table } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";

export function TotalPointsTable() {
  const { data: suppliesForecastData } = useQuery({
    queryFn: () => builder.use().requests.get_supplies_forecast(),
    queryKey: builder.requests.get_supplies_forecast.get(),
    select: ({ data }) => data?.data as SuppliesForecastData[],
  });

  const rows = suppliesForecastData?.map((element: SuppliesForecastData) => (
    <tr key={element.actual_value}>
      <td>{element.name}</td>
      <td>{element.actual_value}</td>
      <td>{element.forecasted_value}</td>
      <td>{element.q1_variance}</td>
      <td>{element.q2_variance}</td>
      <td>{element.q3_variance}</td>
      <td>{element.q4_variance}</td>
    </tr>
  ));

  return (
    <div className="overflow-auto mx-auto w-full">
      <Table verticalSpacing={20} className="overflow-auto w-full mx-auto">
        <thead>
          <tr>
            <th>Actual</th>
            <th>Actual</th>
            <th>Forecast</th>
            <th>Variance</th>
            <th>Variance</th>
            <th>Variance</th>
            <th>Variance</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </div>
  );
}
