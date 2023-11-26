import { Mastercard, Visa } from ".";
import { Wallet3 } from "iconsax-react";

export function CardDetails() {
  return (
    <div className="max-[950px]:w-[300px] overflow-auto max-[626px]:w-full">
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
  );
}
