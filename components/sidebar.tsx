import React from "react";
import { FormattedMessage, useIntl, MessageFormatElement } from "react-intl";
import { CompanyLogo, DeadlineBag, Files, HomepageIcon, Status } from ".";
import { clsx } from "@mantine/core";
import Link from "next/link";
import { LiaTimesSolid } from "react-icons/lia";

export function Sidebar({
  withLogo,
  close,
}: {
  withLogo: boolean;
  close?: () => void;
}) {
  const intl = useIntl();
  const sidebarTitle: String | MessageFormatElement[] =
    intl.messages["page.home.sidebar.title"];
  const sidebarData: String | MessageFormatElement[] =
    intl.messages["page.home.sidebar.data"];
  const sidebarLowerData: String | MessageFormatElement[] =
    intl.messages["page.home.sidebar.lowerpartdata"];

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
      className={clsx(
        "p-30 flex flex-col gap-55 bg-white dark:bg-dark-gray  fixed h-screen z-50 max-[1050px]:w-[200px] min-[1056px]:w-[220px]",
        withLogo ? "max-[867px]:hidden" : "max-[867px]:w-[220px] fixed"
      )}
      id="sidebar"
      aria-owns="submenu">
      {withLogo ? (
        <Link href="/" role="link" title="Go to homepage">
          <CompanyLogo />
        </Link>
      ) : null}

      <div className="flex flex-col gap-72" id="menu">
        <nav className="pl-[2px] gap-18 flex flex-col">
          <article className="flex justify-between items-center font-poppins text-dark-gray text-base font-medium pb-18 border-b border-platinum dark:text-white">
            <h2 className="">{String(sidebarTitle.at(0))}</h2>

            <LiaTimesSolid
              onClick={close}
              className="cursor-pointer min-[867px]:hidden"
            />
          </article>

          <ul className="flex !flex-col gap-28">
            {(sidebarData as MessageFormatElement[]).map((item, index) => (
              <li
                key={index}
                className={clsx(
                  "flex gap-2 items-center font-poppins text-sm/28 cursor-pointer whitespace-nowrap ",
                  index === 0
                    ? "text-crayola hover:text-crayola/70"
                    : "text-chinese-black dark:text-white hover:text-chinese-black/80 hover:dark:text-crayola/70"
                )}>
                {dashboardIcons.at(index)?.icon}
                <FormattedMessage
                  id={`page.home.sidebar.data.${index}`}
                  defaultMessage={String(item)}
                />
              </li>
            ))}
          </ul>
        </nav>
        <nav className="pl-[2px] gap-18 flex flex-col">
          <h2 className="font-poppins text-dark-gray text-base font-medium pb-18 border-b border-platinum dark:text-white ">
            {String(sidebarTitle.at(1))}
          </h2>

          <ul className="flex !flex-col gap-28">
            {(sidebarLowerData as MessageFormatElement[]).map((item, index) => (
              <li
                key={index}
                className={clsx(
                  "flex gap-2 items-center font-poppins text-sm cursor-pointer",
                  String(item) === "Home"
                    ? "text-crayola hover:text-crayola/70"
                    : "text-chinese-black dark:text-white  hover:text-chinese-black/80 hover:dark:text-crayola/70"
                )}>
                {dashboardIcons.at(index)?.icon}
                <FormattedMessage
                  id={`page.home.sidebar.data.${index}`}
                  defaultMessage={String(item)}
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
