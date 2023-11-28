import { ArrowDown2 } from "iconsax-react";
import React from "react";
import { AreaBarChart } from "./transaction-log-chart";
import { DateInput } from "@mantine/dates";
import { useTheme } from "next-themes";

export function AreaChartComponent() {
  const { theme } = useTheme();
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between max-[504px]:flex-col">
        <section className="flex gap-6 max-[504px]:justify-between">
          <article className="flex gap-[10px] items-center">
            <h3 className="text-[#444] text-base dark:text-white">Salary</h3>
            <span className="bg-are-blue w-18 h-18 rounded-[5px]"></span>
          </article>
          <article className="flex gap-[10px] items-center">
            <h3 className="text-[#444] text-base dark:text-white">Cash bond</h3>
            <span className="bg-light-yellow w-18 h-18 rounded-[5px]"></span>
          </article>
        </section>
        <section
          className="flex gap-4 max-[504px]:justify-between"
          aria-label="Date input">
          <DateInput
            label={
              <span className="text-gray text-xs/168 dark:text-white">
                From
              </span>
            }
            classNames={{
              root: "flex gap-4 !items-center,",
              input: "bg-inherit !w-[95px] cursor-pointer",
              rightSection: "cursor-pointer",
            }}
            styles={{
              root: {
                alignItems: "center",
              },
              input: {
                width: "95px !important",
                color:
                  theme === "light" ? "#121212 !important" : "#fff !important",
                border: "none",
                "&::placeholder": {
                  color:
                    theme === "light"
                      ? "#121212 !important"
                      : "#fff !important",
                  fontSize: "14px",
                  lineHeight: "22px",
                },
              },
            }}
            rightSection={<ArrowDown2 size="16" color="#121212" />}
            valueFormat="DD MMM"
            placeholder="20 June"
          />
          <DateInput
            label={
              <span className="text-gray text-xs/168 dark:text-white">To</span>
            }
            classNames={{
              root: "flex gap-4 !items-center",
              input: "bg-inherit !w-[95px] cursor-pointer",
              rightSection: "cursor-pointer",
            }}
            styles={{
              root: {
                alignItems: "center",
              },
              input: {
                width: "95px !important",
                border: "none",
                color:
                  theme === "light" ? "#121212 !important" : "#fff !important",
                "&::placeholder": {
                  color:
                    theme === "light"
                      ? "#121212 !important"
                      : "#fff !important",
                  fontSize: "14px",
                  lineHeight: "22px",
                },
              },
            }}
            rightSection={<ArrowDown2 size="16" color="#121212" />}
            valueFormat="DD MMM"
            placeholder="20 July"
          />
        </section>
      </div>
      <AreaBarChart />
    </div>
  );
}
