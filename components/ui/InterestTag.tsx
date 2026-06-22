interface InterestTagProps {
  label: string;
  selected?: boolean;
  onClick?: () => void;
}

export function InterestTag({ label, selected = false, onClick }: InterestTagProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-body-medium-16 transition-colors ${
        selected
          ? "bg-sreda-red text-sreda-white"
          : "bg-black/5 text-sreda-black"
      }`}
    >
      {label}
    </button>
  );
}
