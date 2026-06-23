"use client";

import { PointerEvent, useRef, useState } from "react";

type SwipeDirection = "left" | "right";

type SwipeEventCardProps = {
  id: string;
  src: string;
  saved: boolean;
  disabled?: boolean;
  onSave: (id: string) => void;
  onSwipeComplete: (direction: SwipeDirection) => boolean | void;
};

const SWIPE_THRESHOLD = 100;
const FLY_OUT_DISTANCE = 520;

export function SwipeEventCard({
  id,
  src,
  saved,
  disabled = false,
  onSave,
  onSwipeComplete,
}: SwipeEventCardProps) {
  const startX = useRef(0);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [savePulse, setSavePulse] = useState(false);

  const rotate = Math.max(-8, Math.min(8, dragX / 14));

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    if (disabled || isAnimatingOut) {
      return;
    }

    startX.current = event.clientX - dragX;
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (disabled || !isDragging || isAnimatingOut) {
      return;
    }

    setDragX(event.clientX - startX.current);
  }

  function finishDrag(offsetX: number) {
    setIsDragging(false);

    if (Math.abs(offsetX) < SWIPE_THRESHOLD) {
      setDragX(0);
      return;
    }

    const direction: SwipeDirection = offsetX > 0 ? "right" : "left";
    setIsAnimatingOut(true);
    setDragX(direction === "right" ? FLY_OUT_DISTANCE : -FLY_OUT_DISTANCE);

    window.setTimeout(() => {
      const shouldAdvance = onSwipeComplete(direction);

      if (shouldAdvance === false) {
        setDragX(0);
        setIsAnimatingOut(false);
      }
    }, 430);
  }

  function handlePointerUp() {
    if (disabled || !isDragging || isAnimatingOut) {
      return;
    }

    finishDrag(dragX);
  }

  function handleSave(event: PointerEvent<HTMLButtonElement>) {
    event.preventDefault();
    event.stopPropagation();
    if (disabled) {
      return;
    }

    onSave(id);
    setSavePulse(true);
    window.setTimeout(() => setSavePulse(false), 180);
  }

  return (
    <div
      className={`absolute inset-0 z-10 mx-auto touch-pan-y select-none ${
        disabled ? "cursor-default" : "cursor-grab active:cursor-grabbing"
      }`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      style={{
        transform: `translateX(${dragX}px) rotate(${rotate}deg)`,
        transition: isDragging
          ? "none"
          : "transform 430ms cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      <img
        src={src}
        alt=""
        width={310}
        height={535}
        className="pointer-events-none block h-auto w-[310px] rounded-[22px] object-contain"
        draggable={false}
      />

      <button
        type="button"
        aria-label={saved ? "Сохранено" : "Сохранить событие"}
        disabled={disabled}
        onPointerDown={(event) => {
          event.preventDefault();
          event.stopPropagation();
        }}
        onPointerUp={handleSave}
        className={`absolute bottom-[42px] right-[25px] h-[44px] w-[44px] rounded-[12px] border-0 bg-transparent ${
          savePulse ? "scale-95" : "scale-100"
        }`}
        style={{
          transition: "transform 180ms ease-out",
        }}
      />
    </div>
  );
}
