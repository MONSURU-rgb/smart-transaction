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
  UserGroup,
  Visa,
} from ".";
import { Layout } from "./common/layout";
import { ArrowDown2, ArrowUp2, Wallet3 } from "iconsax-react";
import Image from "next/image";
import dayjs from "dayjs";
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { DateInput } from "@mantine/dates";

export function Homepage() {
  const intl = useIntl();

  return (
    <div>
      <Layout>{<MainContent />}</Layout>
    </div>
  );
}

export const transactionDetails = [
  {
    company: "Google Cloud",
    type: "debit",
    created_at: "2023-11-20T05:25:27.415Z",
    value: "-$12.7",
  },
  {
    company: "Google Cloud",
    type: "credit",
    created_at: "2023-11-20T05:25:27.415Z",
    value: "-$12.7",
  },
  {
    company: "Google Cloud",
    type: "debit",
    created_at: "2023-11-20T05:25:27.415Z",
    value: "-$12.7",
  },
  {
    company: "Google Cloud",
    type: "debit",
    created_at: "2023-11-20T05:25:27.415Z",
    value: "-$12.7",
  },
];

const areaChartData = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];
export function AreaBarChart() {
  return (
    <ResponsiveContainer width="100%" height={290}>
      <AreaChart
        data={areaChartData}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" color="white" />
        <YAxis />

        <Area
          type="monotone"
          dataKey="uv"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="pv"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
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
          <div className="rounded-xl bg-white p-5 flex flex-col gap-18 flex-1">
            <article className="flex gap-2 items-center pb-4 border-b border-platinum">
              <TransactionDetails />
              <h2 className="text-dark-gray text-base font-medium">
                Transaction Details
              </h2>
            </article>

            <div className="flex flex-col gap-5 ">
              {transactionDetails.map(
                ({ company, type, created_at, value }) => (
                  <div
                    key={company}
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
                          {company}
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
                        type === "debit"
                          ? "text-geranium-lake"
                          : "text-malachite-green",
                        "text-[10px]/160 font-medium"
                      )}>
                      -$12.7
                    </h4>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="max-[891px]:w-[300px]">
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

      <div className="flex gap-6 max-[893px]:flex-col-reverse">
        <section className=" px-6 py-28 flex flex-col min-[893px]:max-w-[258px] bg-white rounded-xl h-fit">
          <article className="flex gap-2 items-center pb-3 border-b border-platinum ">
            <GoDatabase size="20" />
            <h2 className="text-dark-gray text-base font-medium  ">
              Activity Charts
            </h2>
          </article>

          <section className="flex flex-col">
            <section className="flex min-[893px]:flex-col max-[893px]:justify-between gap-5">
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

        <section className="flex-1 pt-28 px-48 bg-white rounded-xl flex gap-7  flex-col">
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
