import { ArrowDown2 } from "iconsax-react";
import { Barchart } from ".";
import { GoDatabase } from "react-icons/go";

export function ActivityChartSection() {
  return (
    <section className="px-6 py-28 flex flex-col min-[1112px]:max-w-[258px] bg-white rounded-xl h-fit">
      <article className="flex gap-2 items-center pb-3 border-b border-platinum ">
        <GoDatabase size="20" />
        <h2 role="heading" className="text-dark-gray text-base font-medium  ">
          Activity Charts
        </h2>
      </article>

      <div className="flex flex-col w-full">
        <section className="flex min-[1112px]:flex-col max-[1112px]:justify-between gap-5 w-full bg-white flex-wrap">
          <article className="pt-4 flex gap-[10px] flex-col min-[1112px]:w-full">
            <h4 className="text-gray text-sm ">Per Week</h4>

            <Barchart
              dataArray={[20, 18, 55, 35, 32, 12, 45]}
              bgColor={[
                "#876AFE",
                "#FFBC02",
                "#876AFE",
                "#FFBC02",
                "#876AFE",
                "#FFBC02",
                "#876AFE",
              ]}
              label={["", "", "", "", "", ""]}
            />
          </article>
          <article className="pt-4 flex gap-[10px] flex-col min-[1112px]:w-full">
            <h4 className="text-gray text-sm">Per Month</h4>

            <Barchart
              dataArray={[20, 18, 55, 35, 32, 12, 45, 35, 32, 12, 45]}
              bgColor={[
                "#876AFE",
                "#FFBC02",
                "#876AFE",
                "#FFBC02",
                "#876AFE",
                "#FFBC02",
                "#876AFE",
                "#FFBC02",
              ]}
              label={["", "", "", "", "", "", "", "", "", ""]}
            />
          </article>
        </section>

        <article
          className="flex justify-between pt-[14px]"
          aria-label="activity views">
          <h4 className="text-gray text-sm">View Per Quarter</h4>
          <ArrowDown2 size="16" color="#121212" variant="Outline" />
        </article>
        <article className="flex justify-between pt-[14px]">
          <h4 className="text-gray text-sm ">View Per Year</h4>
          <ArrowDown2 size="16" color="#121212" variant="Outline" />
        </article>
      </div>
    </section>
  );
}
