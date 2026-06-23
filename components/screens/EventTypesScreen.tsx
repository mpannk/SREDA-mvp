"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { EventTypeCard } from "@/components/ui/EventTypeCard";
import { PageContainer } from "@/components/ui/PageContainer";

const formatCards = [
  { id: "minicard1", title: "Одеон", src: "/assets/images/minicard1.svg" },
  {
    id: "minicard2",
    title: "DES ESSEINTES LIBRARY",
    src: "/assets/images/minicard2.svg",
  },
  {
    id: "minicard3",
    title: "Почувствовать",
    src: "/assets/images/minicard3.svg",
  },
  { id: "minicard4", title: "Формат 4", src: "/assets/images/minicard4.svg" },
  { id: "minicard5", title: "Формат 5", src: "/assets/images/minicard5.svg" },
  { id: "minicard6", title: "Формат 6", src: "/assets/images/minicard6.svg" },
  { id: "minicard7", title: "Формат 7", src: "/assets/images/minicard7.svg" },
];

export function EventTypesScreen() {
  const router = useRouter();
  const [visibleCards, setVisibleCards] = useState(formatCards);
  const [removingCards, setRemovingCards] = useState<string[]>([]);

  function selectCard(cardId: string) {
    if (removingCards.includes(cardId)) {
      return;
    }

    setRemovingCards((currentCards) => [...currentCards, cardId]);

    window.setTimeout(() => {
      setVisibleCards((currentCards) =>
        currentCards.filter((card) => card.id !== cardId),
      );
      setRemovingCards((currentCards) =>
        currentCards.filter((currentCardId) => currentCardId !== cardId),
      );
    }, 620);
  }

  return (
    <PageContainer>
      <main className="relative flex h-screen min-h-screen flex-col overflow-hidden bg-sreda-white">
        <header className="shrink-0 px-6 pt-[98px] text-center">
          <h1 className="mx-auto max-w-[330px] font-heading text-[21px] uppercase leading-[0.98] text-sreda-black">
            КАКОЙ ФОРМАТ
            <br />
            ТЕБЕ БЛИЖЕ?
          </h1>

          <p
            className="mx-auto mt-[15px] max-w-[310px] text-[16px] leading-[1.08] text-sreda-black"
            style={{ fontFamily: "var(--font-body-light)" }}
          >
            Выберите то, куда тебе
            <br />
            было бы интересно пойти
            <br />
            на ближайших выходных
          </p>
        </header>

        <section className="mt-[31px] flex-1 overflow-y-auto px-0 pb-[168px]">
          <div className="flex flex-col gap-5">
            {visibleCards.map((card) => (
              <EventTypeCard
                key={card.id}
                src={card.src}
                title={card.title}
                removing={removingCards.includes(card.id)}
                onSelect={() => selectCard(card.id)}
              />
            ))}
          </div>
        </section>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-1/2 z-10 h-[148px] w-[377px] -translate-x-1/2"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.78) 45%, #FFFFFF 82%, #FFFFFF 100%)",
          }}
        />

        <button
          type="button"
          onClick={() => router.push("/feed")}
          className="absolute bottom-[40px] left-1/2 z-20 flex h-[58px] w-[226px] -translate-x-1/2 items-center justify-center rounded-full bg-sreda-red text-center text-[16px] text-sreda-white shadow-[0_12px_24px_rgba(228,2,16,0.18)]"
          style={{ fontFamily: "var(--font-body-medium)" }}
        >
          Идем дальше
        </button>
      </main>
    </PageContainer>
  );
}
