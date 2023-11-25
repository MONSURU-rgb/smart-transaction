import React from "react";
import { TransactionDetails } from ".";
import Image from "next/image";
import dayjs from "dayjs";
import { clsx } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { builder } from "@/api/builder";

export function TransactionDetailsSection() {
  const { data: transactionDetailsData } = useQuery({
    queryFn: () => builder.use().requests.get_latest_transactions(),
    queryKey: builder.requests.get_latest_transactions.get(),
    select: ({ data }) => data?.data,
  });

  console.log(transactionDetailsData);

  return (
    <div className="rounded-xl bg-white p-5 flex flex-col gap-18 flex-1">
      <article className="flex gap-2 items-center pb-4 border-b border-platinum">
        <TransactionDetails />
        <h2 className="text-dark-gray text-base font-medium">
          Transaction Details
        </h2>
      </article>

      <div className="flex flex-col gap-5 ">
        {transactionDetailsData?.map(({ created_at, charged_by, charge }) => (
          <div
            key={charged_by.company}
            className="flex justify-between items-center">
            <section className=" flex gap-3 items-center">
              <Image
                src="/Alex-smith.svg"
                fill
                className="!relative !w-[28px] !h-[28px]"
                alt="Company logo"
              />

              <article>
                <h3 className="text-dark-gray text-xs font-medium font-poppins">
                  {charged_by.company}
                </h3>

                <h4 className="text-gray text-[9px]/[178%] font-normal">
                  {dayjs(created_at).format("MMMM DD YYYY")} at{" "}
                  {dayjs(created_at).format("HH.MM")}
                  {/* June 19 2023 at 16.42 */}
                </h4>
              </article>
            </section>

            <h4
              className={clsx(
                charge.type === "debit"
                  ? "text-geranium-lake"
                  : "text-malachite-green",
                "text-[10px]/160 font-medium"
              )}>
              -$12.7
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}
