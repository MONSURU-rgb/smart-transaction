import React from "react";
import { FormattedMessage, useIntl, MessageFormatElement } from "react-intl";
import { CompanyLogo, DeadlineBag, Files, HomepageIcon, Status } from ".";
import { clsx } from "@mantine/core";
import Link from "next/link";

export function Sidebar() {
  const intl = useIntl();
  const sidebarTitle = intl.messages["page.home.sidebar.title"];
  const sidebarData = intl.messages["page.home.sidebar.data"];
  const sidebarLowerData = intl.messages["page.home.sidebar.lowerpartdata"];

  const dashboardIcons = [
    { icon: <HomepageIcon /> },
    {
      icon: <Files />,
    },
    {
      icon: <DeadlineBag />,
    },
    {
      icon: <Status />,
    },
    {
      icon: <Status />,
    },
    {
      icon: <Status />,
    },
    {
      icon: <Status />,
    },
  ];

  return (
    <aside
      role="complementary"
      className="p-30 flex flex-col gap-55 bg-white dark:bg-dark-gray max-[801px]:hidden fixed h-screen z-50 w-[200px]">
      <Link href="/">
        <CompanyLogo />
      </Link>

      <div className="flex flex-col gap-72">
        <section className="pl-[2px] gap-18 flex flex-col">
          <h2 className="font-poppins text-dark-gray text-base font-medium pb-18 border-b border-platinum dark:text-white">
            {String(sidebarTitle.at(0))}
          </h2>

          <div className="flex !flex-col gap-28">
            {(sidebarData as MessageFormatElement[]).map((item, index) => (
              <div
                key={index}
                className={clsx(
                  "flex gap-2 items-center font-poppins text-sm/28 cursor-pointer whitespace-nowrap",
                  index === 0
                    ? "text-crayola hover:text-crayola/70"
                    : "text-chinese-black dark:text-white hover:text-chinese-black/80"
                )}>
                {dashboardIcons.at(index)?.icon}
                <FormattedMessage
                  id={`page.home.sidebar.data.${index}`}
                  defaultMessage={String(item)}
                />
              </div>
            ))}
          </div>
        </section>
        <section className="pl-[2px] gap-18 flex flex-col">
          <h2 className="font-poppins text-dark-gray text-base font-medium pb-18 border-b border-platinum dark:text-white ">
            {String(sidebarTitle.at(1))}
          </h2>

          <div className="flex !flex-col gap-28">
            {(sidebarLowerData as MessageFormatElement[]).map((item, index) => (
              <div
                key={index}
                className={clsx(
                  "flex gap-2 items-center font-poppins text-sm cursor-pointer whitespace-nowrap",
                  String(item) === "Home"
                    ? "text-crayola hover:text-crayola/70"
                    : "text-chinese-black dark:text-white  hover:text-chinese-black/80"
                )}>
                {dashboardIcons.at(index)?.icon}
                <FormattedMessage
                  id={`page.home.sidebar.data.${index}`}
                  defaultMessage={String(item)}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </aside>
  );
}
