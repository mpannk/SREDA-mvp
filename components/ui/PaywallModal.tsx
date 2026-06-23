"use client";

type PaywallModalProps = {
  onSubscribe: () => void;
  onReturnTomorrow: () => void;
};

const benefits = [
  "профили наставников",
  "их подборки и одобренные события",
  "безлимитные свайпы",
  "напоминания о сохраненных событиях",
  "приложение без рекламы",
];

export function PaywallModal({
  onSubscribe,
  onReturnTomorrow,
}: PaywallModalProps) {
  return (
    <div
      className="paywall-limit-overlay absolute inset-0 z-50 overflow-hidden bg-black/75 px-6 text-center text-sreda-white"
      role="dialog"
      aria-modal="true"
      aria-label="Бесплатные свайпы закончились"
    >
      <h2 className="mx-auto mt-[136px] max-w-[370px] font-heading text-[20px] uppercase leading-[1.05]">
        БЕСПЛАТНЫЕ СВАЙПЫ
        <br />
        НА СЕГОДНЯ ЗАКОНЧИЛИСЬ :(
      </h2>

      <p
        className="mx-auto mt-[15px] max-w-[330px] text-[16px] leading-[1.08]"
        style={{ fontFamily: "var(--font-body-light)" }}
      >
        Ты посмотрел 15 карточек событий.
        <br />
        Подключи подписку, чтобы продолжить
        <br />
        подбор без ограничений
      </p>

      <section className="mx-auto mt-[34px] w-[316px] rounded-[27px] bg-sreda-white px-6 pb-6 pt-[22px] text-sreda-black shadow-[0_18px_36px_rgba(0,0,0,0.18)]">
        <h3 className="mx-auto font-heading text-[20px] uppercase leading-[0.98]">
          ЧТО ВХОДИТ
          <br />В ПОДПИСКУ?
        </h3>

        <div
          className="mx-auto mt-[22px] max-w-[248px] text-left text-[11px] leading-[1.85]"
          style={{ fontFamily: "var(--font-body-light)" }}
        >
          {benefits.map((benefit) => (
            <p key={benefit}>→ {benefit}</p>
          ))}
        </div>

        <p className="mt-[21px] text-center text-[22px] uppercase leading-none text-sreda-red font-body-medium">
          399 ₽/МЕСЯЦ
        </p>

        <button
          type="button"
          onClick={onSubscribe}
          className="mx-auto mt-[17px] flex h-[44px] w-[252px] items-center justify-center rounded-full bg-sreda-red text-[13px] text-sreda-white shadow-[0_10px_20px_rgba(228,2,16,0.22)]"
          style={{ fontFamily: "var(--font-body-medium)" }}
        >
          Продолжить без ограничений
        </button>

        <button
          type="button"
          onClick={onReturnTomorrow}
          className="mx-auto mt-[11px] block bg-transparent p-0 text-center text-[10px] text-sreda-red"
          style={{ fontFamily: "var(--font-body-medium)" }}
        >
          Вернуться завтра
        </button>
      </section>
    </div>
  );
}
