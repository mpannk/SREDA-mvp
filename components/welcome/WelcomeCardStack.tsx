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
  slideFrom?: "left" | "right";
}

function FloatingCard({
  src,
  width,
  className,
  floatDelay,
  rotation = 0,
  slideFrom,
}: FloatingCardProps) {
  const slideClass =
    slideFrom === "left"
      ? "welcome-card-slide-left"
      : slideFrom === "right"
        ? "welcome-card-slide-right"
        : "";

  return (
    <div
      className={`absolute ${className}`}
      style={rotation !== 0 ? { transform: `rotate(${rotation}deg)` } : undefined}
    >
      <div className={slideClass}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt=""
          width={width}
          className={`welcome-card-float block h-auto max-w-none object-contain ${floatDelay}`}
          draggable={false}
        />
      </div>
    </div>
  );
}

export function WelcomeCardStack() {
  return (
    <div className="relative mx-auto h-[330px] w-full overflow-visible">
      <FloatingCard
        src={welcomeAssets.cardLeft}
        width={310}
        className="left-[-54px] top-[32px] z-10"
        floatDelay="welcome-card-float--delay-0"
        rotation={0}
        slideFrom="left"
      />

      <FloatingCard
        src={welcomeAssets.cardRight}
        width={310}
        className="right-[-54px] top-[32px] z-10"
        floatDelay="welcome-card-float--delay-2"
        rotation={0}
        slideFrom="right"
      />

      <FloatingCard
        src={welcomeAssets.cardMain}
        width={320}
        className="left-1/2 top-[72px] z-20 -translate-x-1/2"
        floatDelay="welcome-card-float--delay-1"
      />

      {/* App badge */}
      <div className="absolute bottom-[-187px] left-[30px] z-[35] rotate-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={welcomeAssets.appSreda}
          alt=""
          width={156}
          className="block h-auto object-contain"
          draggable={false}
        />
      </div>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={welcomeAssets.save}
        alt=""
        width={65}
        className="absolute bottom-[-137px] right-[32px] z-[35] block h-auto rotate-[8deg] object-contain"
        draggable={false}
      />
    </div>
  );
}
