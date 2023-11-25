import { clsx } from "@mantine/core";

import { useIntl } from "react-intl";
import { GoDatabase } from "react-icons/go";
import {
  Barchart,
  CardTransfer,
  CardsIssued,
  Mastercard,
  TotalPointsTable,
  TransactionDetails,
  TransactionDetailsSection,
  UserGroup,
  Visa,
} from ".";
import { Layout } from "./common/layout";
import { ArrowDown2, ArrowUp2, Wallet3 } from "iconsax-react";

import { DateInput } from "@mantine/dates";
import { AreaBarChart } from "./transaction-log-chart";

export function Homepage() {
  const intl = useIntl();

  return <Layout>{<MainContent />}</Layout>;
}

export function MainContent() {
  const intl = useIntl();

  const activeUsers = intl.messages["page.home.hero.active-users"];
  const transactionList = intl.messages["page.home.hero.active-transactions"];
  const cardsIssued = intl.messages["page.home.hero.active.cards.issued"];
  return (
    <main className="px-32 py-38 flex-col gap-38 flex">
      <div className="flex gap-38 max-[1321px]:flex-col max-[801px]:w-full">
        <div className="flex flex-col gap-38 flex-1">
          <div className="flex gap-6 flex-1">
            <div className="whitespace-nowrap flex gap-[14px] flex-col justify-start p-5 rounded-xl bg-white items-start w-225 h-fit flex-1">
              <article className="flex gap-2 items-center justify-center">
                <UserGroup />
                <h3 className="text-crayola text-base font-medium">
                  {String(activeUsers.at(0))}
                </h3>
              </article>
              <section className="flex gap-[6px] items-center">
                <h2 className="text-dark-gray text-[28px]/130 font-semibold">
                  {String(activeUsers.at(1))}
                </h2>
                <article className="flex gap-1">
                  <ArrowUp2 size="24" color="#4EEA7A" variant="Bold" />
                  <h3 className="text-base font-normal text-malachite-green">
                    {String(activeUsers.at(2))}
                  </h3>
                </article>
              </section>
            </div>
            <div className="flex gap-[14px] flex-col w-fit justify-start p-5 rounded-xl bg-white items-start h-fit flex-1">
              <article className="flex gap-2 items-center justify-center">
                <CardTransfer />
                <h3 className="text-are-blue text-base font-medium">
                  {String(transactionList.at(0))}
                </h3>
              </article>
              <section className="flex gap-[6px] items-center">
                <h2 className="text-dark-gray text-[28px]/130 font-semibold">
                  {" "}
                  {String(transactionList.at(1))}
                </h2>
                <article className="flex gap-[6px]">
                  <ArrowDown2 size="24" color="#D62C2C" variant="Bold" />
                  <h3 className="text-base font-normal text-geranium-lake">
                    {" "}
                    {String(transactionList.at(2))}
                  </h3>
                </article>
              </section>
            </div>
            <div className="flex gap-[14px] flex-col w-225 justify-start p-5 rounded-xl bg-white items-start h-fit flex-1">
              <article className="flex gap-2 items-center justify-center">
                <CardsIssued />
                <h3 className="text-light-yellow text-base font-medium">
                  {String(cardsIssued.at(0))}
                </h3>
              </article>
              <section className="flex gap-[6px] items-center">
                <h2 className="text-dark-gray text-[28px]/130 font-semibold">
                  {String(cardsIssued.at(1))}
                </h2>
                <article className="flex gap-1">
                  <ArrowUp2 size="24" color="#4EEA7A" variant="Bold" />
                  <h3 className="text-base font-normal text-malachite-green">
                    {String(cardsIssued.at(2))}
                  </h3>
                </article>
              </section>
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <section className="flex gap-6">
                <article className="flex gap-[10px] items-center">
                  <h3 className="text-[#444] text-base dark:text-white">
                    Salary
                  </h3>
                  <span className="bg-are-blue w-18 h-18 rounded-[5px]"></span>
                </article>
                <article className="flex gap-[10px] items-center">
                  <h3 className="text-[#444] text-base dark:text-white">
                    Cash bond
                  </h3>
                  <span className="bg-light-yellow w-18 h-18 rounded-[5px]"></span>
                </article>
              </section>
              <section className="flex gap-4">
                <DateInput
                  label={
                    <span className="text-gray text-xs/168 dark:text-white">
                      From
                    </span>
                  }
                  classNames={{
                    root: "flex gap-4 !items-center,",
                  }}
                  styles={{
                    root: {
                      alignItems: "center",
                    },
                    input: {
                      width: "95px",
                      border: "none",
                      "&::placeholder": {
                        color: "#121212 important",
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
                    <span className="text-gray text-xs/168 dark:text-white">
                      To
                    </span>
                  }
                  classNames={{
                    root: "flex gap-4 !items-center,",
                  }}
                  styles={{
                    root: {
                      alignItems: "center",
                    },
                    input: {
                      width: "95px",
                      border: "none",
                      "&::placeholder": {
                        color: "#121212 important",
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
        </div>

        <div className="flex gap-6  min-[1321px]:flex-col min-[1321px]:max-w-[clamp(200px,24vw,397px)]">
          {/* Transaction Details */}
          <TransactionDetailsSection />
          <div className="max-[950px]:w-[300px]">
            <section className="rounded-xl bg-white p-5 flex flex-col gap-3">
              <article className="flex gap-2 items-center pb-3 border-b border-platinum">
                <Wallet3 size="20" color="#121212" />
                <h2 className="text-dark-gray text-base font-medium">
                  Quick Transfer
                </h2>
              </article>
              <section className="flex gap-[14px] max-w-[397px] overflow-auto no-scrollbar">
                <article className="rounded-[6px] px-3 py-2 flex gap-3 border border-[#DFDFDF] w-fit">
                  <Visa />
                  <h5 className="w-[60px] text-dark-gray text-xs font-medium ">
                    3419 Debit Card
                  </h5>
                </article>
                <article className="rounded-[6px] px-3 py-2 flex gap-3 border border-[#DFDFDF] w-fit">
                  <Mastercard />
                  <h5 className="w-[60px] text-dark-gray text-xs font-medium">
                    3419 Debit Card
                  </h5>
                </article>
                <article className="rounded-[6px] px-3 py-2 flex gap-3 border border-[#DFDFDF] w-fit">
                  <Visa />
                  <h5 className="w-[60px] text-dark-gray text-xs font-medium">
                    3419 Debit Card
                  </h5>
                </article>
              </section>
            </section>
          </div>
        </div>
      </div>

      <div className="flex gap-6 max-[1112px]:flex-col-reverse">
        {/* Activity Chart Section */}

        <section className=" px-6 py-28 flex flex-col min-[1112px]:max-w-[258px] bg-white rounded-xl h-fit">
          <article className="flex gap-2 items-center pb-3 border-b border-platinum ">
            <GoDatabase size="20" />
            <h2 className="text-dark-gray text-base font-medium  ">
              Activity Charts
            </h2>
          </article>

          <section className="flex flex-col w-full">
            <section className="flex min-[1112px]:flex-col max-[1112px]:justify-between gap-5 w-full bg-white">
              <article className="pt-4 flex gap-[10px] flex-col">
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
              <article className="pt-4 flex gap-[10px] flex-col">
                <h4 className="text-gray text-sm ">Per Month</h4>

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

            <article className="flex justify-between pt-[14px]">
              <h4 className="text-gray text-sm ">View Per Quarter</h4>
              <ArrowDown2 size="16" color="#121212" variant="Outline" />
            </article>
            <article className="flex justify-between pt-[14px]">
              <h4 className="text-gray text-sm ">View Per Year</h4>
              <ArrowDown2 size="16" color="#121212" variant="Outline" />
            </article>
          </section>
        </section>

        {/* Total Point Section */}

        <section className="flex-1 pt-28 px-48 bg-white rounded-xl flex gap-7 flex-col">
          <article className="flex gap-2 items-center pb-4 border-b border-platinum ">
            <GoDatabase size="20" />
            <h2 className="text-dark-gray text-base font-medium ">
              Total Points
            </h2>
          </article>

          <TotalPointsTable />
        </section>
      </div>
    </main>
  );
}

{
  /* <h1>
        <FormattedMessage
          id="page.home.title"
          values={{ b: (chunks) => <b>{chunks}</b> }}
        />
      </h1>

      <p className="text-green-600">
        <FormattedMessage id="page.home.description" />
      </p>

      <h4>
        {" "}
        <FormattedMessage id="page.home.description" />
      </h4> */
}
