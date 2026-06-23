interface EventTypeCardProps {
  src: string;
  title: string;
  removing?: boolean;
  onSelect: () => void;
}

export function EventTypeCard({
  src,
  title,
  removing = false,
  onSelect,
}: EventTypeCardProps) {
  return (
    <div
      className={`event-type-card relative mx-auto h-[180px] w-[339px] shrink-0 overflow-hidden transition-all duration-500 ease-in-out ${
        removing ? "is-removing opacity-80" : "translate-x-0 opacity-100"
      }`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={title}
        width={339}
        height={180}
        className="block h-[180px] w-[339px] object-cover object-top"
        draggable={false}
      />
      <button
        type="button"
        aria-label={`Выбрать формат: ${title}`}
        onClick={onSelect}
        className="absolute bottom-[20px] left-[20px] h-[30px] w-[88px] rounded-full border-0 bg-transparent"
      />
    </div>
  );
}
