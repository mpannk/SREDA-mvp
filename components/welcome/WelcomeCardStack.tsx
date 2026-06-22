import { welcomeAssets } from "@/data/welcome";

interface FloatingCardProps {
  src: string;
  width: number;
  className: string;
  floatDelay:
    | "welcome-card-float--delay-0"
    | "welcome-card-float--delay-1"
    | "welcome-card-float--delay-2";
  rotation?: number;
}

function FloatingCard({
  src,
  width,
  className,
  floatDelay,
  rotation = 0,
}: FloatingCardProps) {
  return (
    <div
      className={`absolute ${className}`}
      style={rotation !== 0 ? { transform: `rotate(${rotation}deg)` } : undefined}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        width={width}
        className={`welcome-card-float block h-auto max-w-none object-contain ${floatDelay}`}
        draggable={false}
      />
    </div>
  );
}

export function WelcomeCardStack() {
  return (
    <div className="relative mx-auto h-[345px] w-full overflow-visible">
      <FloatingCard
        src={welcomeAssets.cardLeft}
        width={268}
        className="left-[-42px] top-[34px] z-10"
        floatDelay="welcome-card-float--delay-0"
        rotation={-5}
      />

      <FloatingCard
        src={welcomeAssets.cardRight}
        width={268}
        className="right-[-42px] top-[34px] z-10"
        floatDelay="welcome-card-float--delay-2"
        rotation={5}
      />

      <FloatingCard
        src={welcomeAssets.cardMain}
        width={292}
        className="left-1/2 top-0 z-20 -translate-x-1/2"
        floatDelay="welcome-card-float--delay-1"
      />

      {/* App badge */}
      <div className="absolute bottom-[54px] left-[42px] z-[35] rotate-[-12deg]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={welcomeAssets.appSreda}
          alt=""
          width={94}
          className="block h-auto object-contain"
          draggable={false}
        />
      </div>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={welcomeAssets.tag1}
        alt=""
        width={82}
        className="absolute right-[70px] top-[205px] z-[35] block h-auto rotate-[-8deg] object-contain"
        draggable={false}
      />

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={welcomeAssets.tag2}
        alt=""
        width={82}
        className="absolute right-[54px] top-[255px] z-[35] block h-auto rotate-[-4deg] object-contain"
        draggable={false}
      />

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={welcomeAssets.save}
        alt=""
        width={58}
        className="absolute bottom-[44px] right-[38px] z-[35] block h-auto rotate-[8deg] object-contain"
        draggable={false}
      />
    </div>
  );
}
