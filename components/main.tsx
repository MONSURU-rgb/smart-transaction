import { GoDatabase } from "react-icons/go";
import {
  CardTransfer,
  CardsIssued,
  TransactionDetailsSection,
  UserGroup,
} from ".";
import { useIntl } from "react-intl";
import { ArrowDown2, ArrowUp2 } from "iconsax-react";
import { useTheme } from "next-themes";
import { AreaChartComponent } from "./area-chart";
import { TotalPointsSection } from "./total-points-section";
import { ActivityChartSection } from "./activity-chart-section";
import { CardDetails } from "./card-details";
import { builder } from "@/api/builder";
import { useQuery } from "@tanstack/react-query";
import { clsx } from "@mantine/core";

// Function to calculate the gain or loss
function calculatePercentageLoss(current: number, lastMonth: number) {
  // Check if either current or lastMonth is not a number
  if (isNaN(current) || isNaN(lastMonth)) {
    return 0;
  }

  // Calculate the percentage loss
  const loss = ((lastMonth - current) / current) * 100;

  // Return the result
  return loss.toFixed(2);
}

export function MainContent() {
  const intl = useIntl();
  const activeUsers = intl.messages["page.home.hero.active-users"];
  const transactionList = intl.messages["page.home.hero.active-transactions"];
  const cardsIssued = intl.messages["page.home.hero.active.cards.issued"];

  // UseQuery to get the transaction Overview
  const { data: suppliesForecastData } = useQuery({
    queryFn: () => builder.use().requests.get_transactions_overview(),
    queryKey: builder.requests.get_transactions_overview.get(),
    select: ({ data }) => data?.data,
  });

  console.log(suppliesForecastData);

  return (
    <main className="px-32 py-38 flex-col gap-38 flex">
      <div className="flex gap-38 max-[1321px]:flex-col max-[801px]:w-full">
        <div className="flex flex-col gap-5 flex-1">
          <div className="flex gap-6 flex-1 w-full overflow-auto no-scrollbar">
            <div className="whitespace-nowrap flex gap-[14px] flex-col justify-start p-5 rounded-xl bg-white items-start w-225 flex-1 min-w-[205px] h-[114.4px] ">
              <article className="flex gap-2 items-center justify-center">
                <UserGroup />
                <h2
                  role="heading"
                  className="text-crayola text-base font-medium">
                  {String(activeUsers.at(0))}
                </h2>
              </article>
              <section className="flex gap-[6px] items-center">
                <h2
                  role="heading"
                  className="text-dark-gray text-[28px]/130 font-semibold">
                  {suppliesForecastData?.at(0)?.current}
                </h2>
                <article className="flex gap-1">
                  {String(
                    calculatePercentageLoss(
                      Number(suppliesForecastData?.at(0)?.last_month),
                      Number(suppliesForecastData?.at(0)?.current)
                    )
                  ).startsWith("-") ? (
                    <ArrowDown2 size="24" color="#D62C2C" variant="Bold" />
                  ) : (
                    <ArrowUp2 size="24" color="#4EEA7A" variant="Bold" />
                  )}

                  <h3
                    className={clsx(
                      "text-base font-normal",
                      "text-base font-normal ",
                      String(
                        calculatePercentageLoss(
                          Number(suppliesForecastData?.at(0)?.last_month),
                          Number(suppliesForecastData?.at(0)?.current)
                        )
                      ).startsWith("-")
                        ? "text-geranium-lake"
                        : "text-malachite-green"
                    )}>
                    {calculatePercentageLoss(
                      Number(suppliesForecastData?.at(1)?.last_month),
                      Number(suppliesForecastData?.at(0)?.current)
                    )}
                    %
                  </h3>
                </article>
              </section>
            </div>
            <div className="flex gap-[14px] flex-col w-fit justify-start p-5 rounded-xl bg-white items-start flex-1 h-[114.4px] min-w-[225px]">
              <article className="flex gap-2 items-center justify-center">
                <CardTransfer />
                <h3 className="text-are-blue text-base font-medium">
                  {String(transactionList.at(0))}
                </h3>
              </article>
              <section className="flex gap-[6px] items-center">
                <h2 className="text-dark-gray text-[28px]/130 font-semibold">
                  {" "}
                  {suppliesForecastData?.at(1)?.current}
                </h2>
                <article className="flex gap-1">
                  {String(
                    calculatePercentageLoss(
                      Number(suppliesForecastData?.at(1)?.last_month),
                      Number(suppliesForecastData?.at(1)?.current)
                    )
                  ).startsWith("-") ? (
                    <ArrowDown2 size="24" color="#D62C2C" variant="Bold" />
                  ) : (
                    <ArrowUp2 size="24" color="#4EEA7A" variant="Bold" />
                  )}

                  <h3
                    className={clsx(
                      "text-base font-normal",
                      "text-base font-normal ",
                      String(
                        calculatePercentageLoss(
                          Number(suppliesForecastData?.at(1)?.last_month),
                          Number(suppliesForecastData?.at(1)?.current)
                        )
                      ).startsWith("-")
                        ? "text-geranium-lake"
                        : "text-malachite-green"
                    )}>
                    {calculatePercentageLoss(
                      Number(suppliesForecastData?.at(1)?.last_month),
                      Number(suppliesForecastData?.at(1)?.current)
                    )}
                    %
                  </h3>
                </article>
              </section>
            </div>
            <div className="flex gap-[14px] flex-col w-225 justify-start p-5 rounded-xl bg-white items-start flex-1 h-[114.4px] min-w-[205px]">
              <article className="flex gap-2 items-center justify-center">
                <CardsIssued />
                <h3 className="text-light-yellow text-base font-medium">
                  {String(cardsIssued.at(0))}
                </h3>
              </article>
              <section className="flex gap-[6px] items-center">
                <h2 className="text-dark-gray text-[28px]/130 font-semibold">
                  {suppliesForecastData?.at(2)?.current}
                </h2>
                <article className="flex gap-1">
                  {String(
                    calculatePercentageLoss(
                      Number(suppliesForecastData?.at(2)?.last_month),
                      Number(suppliesForecastData?.at(2)?.current)
                    )
                  ).startsWith("-") ? (
                    <ArrowDown2 size="24" color="#D62C2C" variant="Bold" />
                  ) : (
                    <ArrowUp2 size="24" color="#4EEA7A" variant="Bold" />
                  )}

                  <h3
                    className={clsx(
                      "text-base font-normal",
                      "text-base font-normal ",
                      String(
                        calculatePercentageLoss(
                          Number(suppliesForecastData?.at(2)?.last_month),
                          Number(suppliesForecastData?.at(2)?.current)
                        )
                      ).startsWith("-")
                        ? "text-geranium-lake"
                        : "text-malachite-green"
                    )}>
                    {calculatePercentageLoss(
                      Number(suppliesForecastData?.at(2)?.last_month),
                      Number(suppliesForecastData?.at(2)?.current)
                    )}
                    %
                  </h3>
                </article>
              </section>
            </div>
          </div>
          <AreaChartComponent />
        </div>

        <div className="flex gap-6  min-[1321px]:flex-col min-[1321px]:max-w-[clamp(200px,24vw,397px)] max-[626px]:flex-col">
          {/* Transaction Details */}
          <TransactionDetailsSection />
          <CardDetails />
        </div>
      </div>

      <div className="flex gap-6 max-[1112px]:flex-col-reverse">
        {/* Activity Chart Section */}

        <ActivityChartSection />

        {/* Total Point Section */}

        <TotalPointsSection />
      </div>
    </main>
  );
}
