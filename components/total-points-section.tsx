import { GoDatabase } from "react-icons/go";
import { TotalPointsTable } from ".";

export function TotalPointsSection() {
  return (
    <section className="flex-1 pt-28 px-48 bg-white rounded-xl flex gap-7 flex-col">
      <article className="flex gap-2 items-center pb-4 border-b border-platinum ">
        <GoDatabase size="20" />
        <h2 className="text-dark-gray text-base font-medium ">Total Points</h2>
      </article>

      <TotalPointsTable />
    </section>
  );
}
