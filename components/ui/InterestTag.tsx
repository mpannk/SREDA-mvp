interface InterestTagProps {
  label: string;
  selected?: boolean;
  removable?: boolean;
  onClick?: () => void;
  onRemove?: () => void;
}

export function InterestTag({
  label,
  selected = false,
  removable = false,
  onClick,
  onRemove,
}: InterestTagProps) {
  const className = `inline-flex h-[29px] items-center justify-center gap-2.5 rounded-full px-4 text-[13px] leading-none text-sreda-white ${
    selected ? "bg-sreda-red" : "bg-[#111111]"
  }`;
  const style = { fontFamily: "var(--font-body-light)" };

  if (removable) {
    return (
      <span className={className} style={style}>
        <button
          type="button"
          aria-label={`Убрать ${label}`}
          onClick={(event) => {
            event.stopPropagation();
            onRemove?.();
          }}
          className="inline-flex h-3.5 w-3.5 items-center justify-center text-[14px] leading-none"
        >
          ×
        </button>
        <span>{label}</span>
      </span>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
      style={style}
    >
      <span>{label}</span>
    </button>
  );
}
