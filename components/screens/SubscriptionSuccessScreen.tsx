"use client";

import { useRouter } from "next/navigation";
import { PageContainer } from "@/components/ui/PageContainer";

export function SubscriptionSuccessScreen() {
  const router = useRouter();

  function continueSwiping() {
    router.push("/feed?subscribed=true");
  }

  return (
    <PageContainer>
      <main className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#F3A7AD_0%,#E40210_100%)] px-6">
        <div className="pointer-events-none absolute left-1/2 top-[207px] w-[330px] -translate-x-1/2 overflow-hidden rounded-[24px] opacity-40 shadow-[0_22px_42px_rgba(0,0,0,0.28)]">
          <img
            src="/assets/images/swipe-card1.svg"
            alt=""
            width={330}
            height={570}
            className="block h-auto w-[330px] object-contain"
            draggable={false}
          />
          <div className="absolute inset-0 bg-sreda-red/28" />
        </div>

        <section className="absolute left-1/2 top-[227px] z-10 w-[320px] -translate-x-1/2 rounded-[27px] bg-sreda-white px-[22px] pb-[34px] pt-[30px] text-center shadow-[0_18px_36px_rgba(0,0,0,0.18)]">
          <h1 className="mx-auto max-w-[270px] font-heading text-[21px] uppercase leading-[0.98] text-sreda-black">
            ПОЗДРАВЛЯЕМ
            <br />С ПОДКЛЮЧЕНИЕМ
            <br />
            ПОДПИСКИ!
          </h1>

          <p
            className="mt-[23px] text-[16px] leading-[1.1] text-sreda-black"
            style={{ fontFamily: "var(--font-body-light)" }}
          >
            Теперь тебе доступны:
          </p>

          <img
            src="/assets/images/subs.svg"
            alt="Безлимитные свайпы, напоминания о сохраненных событиях, доступ к профилям наставников, отсутствие рекламы"
            width={247}
            height={57}
            className="mx-auto mt-[19px] block h-auto w-[247px]"
            draggable={false}
          />

          <button
            type="button"
            onClick={continueSwiping}
            className="mx-auto mt-[28px] flex h-[46px] w-[248px] items-center justify-center rounded-full bg-sreda-red text-[15px] text-sreda-white shadow-[0_10px_20px_rgba(228,2,16,0.22)]"
            style={{ fontFamily: "var(--font-body-medium)" }}
          >
            Продолжить свайпать →
          </button>
        </section>
      </main>
    </PageContainer>
  );
}
