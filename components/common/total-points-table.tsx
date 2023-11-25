import { Table } from "@mantine/core";
const elements = [
  {
    actual_value: 133525,
    forecasted_value: 44420,
    name: "Office & Supplies",
    q1_variance: 84692,
    q2_variance: 96468,
    q3_variance: 23283,
    q4_variance: 99032,
  },
  {
    actual_value: 133525,
    forecasted_value: 44420,
    name: "Office & Supplies",
    q1_variance: 84692,
    q2_variance: 96468,
    q3_variance: 23283,
    q4_variance: 99032,
  },
  {
    actual_value: 133525,
    forecasted_value: 44420,
    name: "Office & Supplies",
    q1_variance: 84692,
    q2_variance: 96468,
    q3_variance: 23283,
    q4_variance: 99032,
  },
  {
    actual_value: 133525,
    forecasted_value: 44420,
    name: "Office & Supplies",
    q1_variance: 84692,
    q2_variance: 96468,
    q3_variance: 23283,
    q4_variance: 99032,
  },
  {
    actual_value: 133525,
    forecasted_value: 44420,
    name: "Office & Supplies",
    q1_variance: 84692,
    q2_variance: 96468,
    q3_variance: 23283,
    q4_variance: 99032,
  },
];

export function TotalPointsTable() {
  const rows = elements.map((element) => (
    <tr key={element.name}>
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
    <Table verticalSpacing={20}>
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
  );
}
