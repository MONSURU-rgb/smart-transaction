import { LightDark, Sidebar } from "..";
import { useRouter } from "next/router";
import Link from "next/link";
import { Avatar, Button, Popover, TextInput } from "@mantine/core";
import { Message, SearchNormal, Setting } from "iconsax-react";
import { PiBellThin } from "react-icons/pi";
import { useDisclosure } from "@mantine/hooks";

export function Header() {
  const { locales } = useRouter();
  const [opened, { close, open }] = useDisclosure(false);
  return (
    <header className="bg-light-gray px-32 py-4 flex justify-between dark:bg-dark-gray items-center sticky top-0 z-50 backdrop-blur-md">
      <TextInput
        icon={<SearchNormal size="24" color="#A8A8A8" />}
        placeholder="Search property..."
        classNames={{
          root: "w-1/3 py-3 rounded-xl px-6 bg-white",
          input: "border-none",
          icon: "pr-[14px]",
        }}
      />
      {/* Light And Dark Toggle Button Functionality */}
      <LightDark />

      <div className="flex gap-5 items-center justify-center">
        <Popover width="target" position="bottom" withArrow shadow="md">
          <Popover.Target>
            <Button className="text-dark-gray dark:text-white text-base">
              Choose language
            </Button>
          </Popover.Target>
          <Popover.Dropdown>
            {/* <section className="flex gap-4 justify-center dark:text-white"> */}
            {[...(locales as string[])].sort().map((locale) => (
              <Link
                key={locale}
                href="/"
                locale={locale}
                className="block"
                onClick={() => close()}>
                {locale}
              </Link>
            ))}
            {/* </section> */}
          </Popover.Dropdown>
        </Popover>

        <section className="flex gap-32 items-center">
          <figure className="flex gap-6 max-[1020px]:hidden">
            <Message size="24" className="text-[#121212] dark:text-white" />

            <Setting size="24" className="text-[#121212] dark:text-white" />

            <PiBellThin size="24" className="text-[#121212] dark:text-white" />
          </figure>

          <article className="flex gap-[14px] items-center">
            <Avatar src="Alex-smith.svg" alt="User image" />
            <h2 className="text-poppins text-base text-dark-gray dark:text-white">
              Alex Smith
            </h2>
          </article>
        </section>
      </div>
    </header>
  );
}
