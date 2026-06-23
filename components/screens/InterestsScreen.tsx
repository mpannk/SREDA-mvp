"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { InterestTag } from "@/components/ui/InterestTag";
import { PageContainer } from "@/components/ui/PageContainer";

const mainTags = [
  "галереи",
  "музеи",
  "кино",
  "тусовки",
  "концерты",
  "парки",
  "стендап",
];

const interestTags = [
  "современное искусство",
  "бары",
  "рейвы",
  "клубы",
  "рестораны",
  "веранды",
  "джаз",
  "с собакой",
  "классическая музыка",
  "лекции",
  "экстрим",
  "спорт",
  "танцы",
  "караоке",
  "свидание",
  "пешком",
  "смотровые",
];

export function InterestsScreen() {
  const router = useRouter();
  const [selectedMainTags, setSelectedMainTags] = useState(mainTags);
  const [selectedInterestTags, setSelectedInterestTags] = useState<string[]>([]);

  function removeSelectedTag(tag: string) {
    setSelectedMainTags((currentTags) =>
      currentTags.filter((currentTag) => currentTag !== tag),
    );
  }

  function toggleInterestTag(tag: string) {
    setSelectedInterestTags((currentTags) =>
      currentTags.includes(tag)
        ? currentTags.filter((currentTag) => currentTag !== tag)
        : [...currentTags, tag],
    );
  }

  return (
    <PageContainer>
      <main className="relative flex min-h-screen flex-col bg-sreda-white px-[18px] pb-[128px] pt-[100px]">
        <h1 className="text-center font-heading text-[20px] uppercase leading-none text-sreda-black">
          ЧТО ТЕБЕ ИНТЕРЕСНО?
        </h1>

        <p
          className="mx-auto mt-[15px] max-w-[320px] text-center text-[16px] leading-[1.08] text-sreda-black"
          style={{ fontFamily: "var(--font-body-light)" }}
        >
          Выбери несколько направлений,
          <br />
          по ним мы соберем твою первую
          <br />
          ленту событий
        </p>

        <p
          className="mt-[28px] text-center text-[14px] text-sreda-gray-caption"
          style={{ fontFamily: "var(--font-body-light)" }}
        >
          Основное
        </p>

        <div className="mt-[19px] flex flex-wrap justify-start gap-x-2 gap-y-2.5">
          {selectedMainTags.map((tag) => (
            <InterestTag
              key={tag}
              label={tag}
              selected
              removable
              onRemove={() => removeSelectedTag(tag)}
            />
          ))}
        </div>

        <p
          className="mt-[29px] text-center text-[14px] text-sreda-gray-caption"
          style={{ fontFamily: "var(--font-body-light)" }}
        >
          Интересы
        </p>

        <div className="mt-[19px] flex flex-wrap justify-start gap-x-2 gap-y-2.5">
          {interestTags.map((tag) => {
            const selected = selectedInterestTags.includes(tag);

            return (
              <InterestTag
                key={tag}
                label={tag}
                selected={selected}
                removable={false}
                onClick={() => toggleInterestTag(tag)}
              />
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => router.push("/event-types")}
          className="absolute bottom-[42px] left-1/2 flex h-[58px] w-[226px] -translate-x-1/2 items-center justify-center rounded-full bg-sreda-red text-center text-[16px] leading-[1.05] text-sreda-white shadow-[0_12px_24px_rgba(0,0,0,0.18)]"
          style={{ fontFamily: "var(--font-body-medium)" }}
        >
          Пока не знаю,
          <br />
          покажите разное
        </button>
      </main>
    </PageContainer>
  );
}
