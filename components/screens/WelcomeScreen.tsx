import { PageContainer } from "@/components/ui/PageContainer";
import { CTAButton } from "@/components/ui/CTAButton";
import { WelcomeCardStack } from "@/components/welcome/WelcomeCardStack";
import { welcomeAssets, welcomeContent } from "@/data/welcome";

export function WelcomeScreen() {
  return (
    <PageContainer>
      <div className="relative flex min-h-screen flex-col">
        {/* Header */}
        <header className="relative z-10 shrink-0 px-6 pt-[68px] text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={welcomeAssets.logo}
            alt="SREDA"
            width={112}
            className="mx-auto block h-auto"
            draggable={false}
          />

          <h1 className="mx-auto mt-[22px] max-w-[330px] text-heading-18 uppercase text-sreda-black">
            {welcomeContent.taglineLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
        </header>

        {/* Card stack */}
        <section className="relative z-0 mt-[26px] shrink-0">
          <WelcomeCardStack />
        </section>

        {/* Bottom panel */}
        <footer className="relative z-40 -mt-[72px] shrink-0 rounded-t-[28px] bg-sreda-white px-6 pb-[34px] pt-7">
          <h2 className="mx-auto mb-0 max-w-[360px] text-center text-heading-23 uppercase text-sreda-black">
            {welcomeContent.headlineLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>

          <div className="mt-8 flex justify-center">
            <CTAButton href="/login">{welcomeContent.cta}</CTAButton>
          </div>

          <p className="mt-[17px] text-center text-body-light-12 text-sreda-gray-caption">
            {welcomeContent.caption}
          </p>
        </footer>
      </div>
    </PageContainer>
  );
}
