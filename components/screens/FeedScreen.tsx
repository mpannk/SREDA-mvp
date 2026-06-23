"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { PageContainer } from "@/components/ui/PageContainer";
import { PaywallModal } from "@/components/ui/PaywallModal";
import { SwipeEventCard } from "@/components/ui/SwipeEventCard";

const swipeCards = [
  { id: "swipe-card1", src: "/assets/images/swipe-card1.svg" },
  { id: "swipe-card2", src: "/assets/images/swipe-card2.svg" },
  { id: "swipe-card3", src: "/assets/images/swipe-card3.svg" },
  { id: "swipe-card4", src: "/assets/images/swipe-card4.svg" },
  { id: "swipe-card5", src: "/assets/images/swipe-card5.svg" },
  { id: "swipe-card6", src: "/assets/images/swipe-card6.svg" },
  { id: "swipe-card7", src: "/assets/images/swipe-card7.svg" },
  { id: "swipe-card8", src: "/assets/images/swipe-card8.svg" },
  { id: "swipe-card9", src: "/assets/images/swipe-card9.svg" },
  { id: "swipe-card10", src: "/assets/images/swipe-card10.svg" },
  { id: "swipe-card11", src: "/assets/images/swipe-card11.svg" },
  { id: "swipe-card12", src: "/assets/images/swipe-card12.svg" },
  { id: "swipe-card13", src: "/assets/images/swipe-card13.svg" },
  { id: "swipe-card14", src: "/assets/images/swipe-card14.svg" },
  { id: "swipe-card15", src: "/assets/images/swipe-card15.svg" },
];

const freeSwipeLimit = 15;

export function FeedScreen() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swipeCount, setSwipeCount] = useState(0);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isPaywallOpen, setIsPaywallOpen] = useState(false);
  const [isSwipeLocked, setIsSwipeLocked] = useState(false);
  const [savedCards, setSavedCards] = useState<string[]>([]);
  const activeCard = swipeCards[currentIndex];
  const nextCard = swipeCards[currentIndex + 1];

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setIsSubscribed(params.get("subscribed") === "true");
  }, []);

  useEffect(() => {
    if (!activeCard && !isSubscribed) {
      setIsSwipeLocked(true);
      setIsPaywallOpen(true);
    }
  }, [activeCard, isSubscribed]);

  function handleSwipeComplete() {
    const nextSwipeCount = swipeCount + 1;
    setSwipeCount(nextSwipeCount);

    if (!isSubscribed && nextSwipeCount >= freeSwipeLimit) {
      setIsSwipeLocked(true);
      setIsPaywallOpen(true);
      return false;
    }

    setCurrentIndex((index) => Math.min(index + 1, swipeCards.length));
    return true;
  }

  function saveCard(cardId: string) {
    setSavedCards((cards) =>
      cards.includes(cardId) ? cards : [...cards, cardId],
    );
  }

  return (
    <PageContainer>
      <main className="relative flex min-h-screen flex-col overflow-hidden bg-sreda-white px-6 text-center">
        <header className="shrink-0 pt-[94px]">
          <h1 className="mx-auto max-w-[360px] font-heading text-[21px] uppercase leading-[0.98] text-sreda-black">
            МЫ СОБРАЛИ ДЛЯ ТЕБЯ
            <br />
            ПЕРВУЮ ПОДБОРКУ!
          </h1>

          <p
            className="mx-auto mt-[15px] max-w-[330px] text-[16px] leading-[1.08] text-sreda-black"
            style={{ fontFamily: "var(--font-body-light)" }}
          >
            Свайпай карточки:
            <br />
            вправо — интересно, влево — не мое
          </p>
        </header>

        <section className="relative mx-auto mt-[25px] h-[536px] w-[310px] shrink-0">
          {nextCard ? (
            <div className="pointer-events-none absolute left-1/2 top-[12px] w-[310px] -translate-x-1/2 scale-[0.96] opacity-55">
              <img
                src={nextCard.src}
                alt=""
                width={310}
                height={535}
                className="block h-auto w-[310px] rounded-[22px] object-contain"
                draggable={false}
              />
            </div>
          ) : null}

          {activeCard ? (
            <SwipeEventCard
              key={activeCard.id}
              id={activeCard.id}
              src={activeCard.src}
              saved={savedCards.includes(activeCard.id)}
              disabled={isSwipeLocked || isPaywallOpen}
              onSave={saveCard}
              onSwipeComplete={handleSwipeComplete}
            />
          ) : null}
        </section>

        <p
          className="mx-auto mt-[19px] max-w-[310px] text-[14px] leading-[1.1] text-sreda-gray-caption"
          style={{ fontFamily: "var(--font-body-light)" }}
        >
          Сохраняйте в избранное события,
          <br />к которым хотите вернуться позже
        </p>

        {isPaywallOpen ? (
          <PaywallModal
            onSubscribe={() => router.push("/subscription-success")}
            onReturnTomorrow={() => setIsPaywallOpen(false)}
          />
        ) : null}
      </main>
    </PageContainer>
  );
}
