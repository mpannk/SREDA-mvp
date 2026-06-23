"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { PageContainer } from "@/components/ui/PageContainer";
import { AuthInput } from "@/components/ui/AuthInput";
import { CTAButton } from "@/components/ui/CTAButton";
import { welcomeAssets } from "@/data/welcome";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function LoginScreen() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !password.trim()) {
      setError("Заполни все поля, чтобы войти в среду");
      return;
    }

    if (!emailPattern.test(email.trim())) {
      setError("Кажется, в адресе ошибка");
      return;
    }

    setError("");
    router.push("/interests");
  }

  return (
    <PageContainer>
      <main
        className="flex min-h-screen flex-col bg-sreda-white px-6 pb-8"
        style={{ paddingTop: 50 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={welcomeAssets.logo}
          alt="SREDA"
          width={112}
          className="mx-auto block h-auto"
          style={{ width: 112 }}
          draggable={false}
        />

        <h1 className="mx-auto mt-[114px] max-w-[330px] text-center font-heading text-[21px] uppercase leading-[0.98] text-sreda-black">
          <span
            className="block"
            style={{ fontFamily: "var(--font-heading-regular)" }}
          >
            ПРЕВРАТИМ ХАОС
          </span>
          <span className="block">
            <span style={{ fontFamily: "var(--font-heading-regular)" }}>
              АФИШ В{" "}
            </span>
            <span style={{ fontFamily: "var(--font-heading)" }}>ПОНЯТНЫЙ</span>
          </span>
          <span
            className="block"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            КУЛЬТУРНЫЙ МАРШРУТ
          </span>
        </h1>

        <form onSubmit={handleSubmit} className="mt-[58px] flex flex-col">
          <div className="mx-auto flex w-full max-w-[330px] flex-col gap-2.5 rounded-[24px] bg-sreda-black px-4 py-7">
            <AuthInput
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Как тебя зовут?"
              autoComplete="name"
            />
            <AuthInput
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Твоя почта"
              type="email"
              autoComplete="email"
            />
            <AuthInput
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Пароль"
              type="password"
              autoComplete="new-password"
            />
          </div>

          <p className="min-h-[28px] pt-3 text-center text-body-light-12 text-sreda-red">
            {error}
          </p>

          <div className="flex justify-center">
            <CTAButton
              type="submit"
              className="h-[49px] w-[224px] shadow-[0_12px_24px_rgba(0,0,0,0.18)]"
              style={{ boxShadow: "0 12px 24px rgba(0, 0, 0, 0.18)" }}
            >
              Начать подбор
            </CTAButton>
          </div>
        </form>

        <div className="mt-auto text-center">
          <p className="text-body-light-12 text-sreda-black">Уже есть аккаунт?</p>
          <a
            href="/login"
            className="mt-3 block text-body-medium-16 text-sreda-red"
          >
            Войти
          </a>
        </div>
      </main>
    </PageContainer>
  );
}
