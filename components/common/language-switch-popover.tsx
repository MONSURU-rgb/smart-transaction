import { Button, Popover } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { useRouter } from "next/router";

export function LanguageSwitchPopover() {
  const { locales } = useRouter();
  const [opened, { close, open }] = useDisclosure(false);
  return (
    <Popover
      width="target"
      position="bottom"
      withArrow
      shadow="md"
      opened={opened}
      closeOnClickOutside={true}>
      <Popover.Target>
        <Button className="text-dark-gray dark:text-white text-base">
          Choose language
        </Button>
      </Popover.Target>
      <Popover.Dropdown
        sx={{
          borderRadius: 12,
          paddingBlock: 16,
          paddingInline: 12,
          width: "!important",
        }}>
        <section className="flex gap-4 justify-center dark:text-white">
          {[...(locales as string[])].sort().map((locale) => (
            <Link
              key={locale}
              href="/"
              locale={locale}
              className="block"
              onClick={() => {
                close(), console.log(locale);
              }}>
              {locale === "en"
                ? "English"
                : locale === "ar"
                ? "Arabic"
                : locale === "fr"
                ? "French"
                : "Dutsh"}
            </Link>
          ))}
        </section>
      </Popover.Dropdown>
    </Popover>
  );
}
