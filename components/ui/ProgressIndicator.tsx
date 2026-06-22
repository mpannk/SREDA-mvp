interface ProgressIndicatorProps {
  current: number;
  total: number;
  className?: string;
}

export function ProgressIndicator({
  current,
  total,
  className = "",
}: ProgressIndicatorProps) {
  const progress = Math.min(Math.max(current / total, 0), 1) * 100;

  return (
    <div className={`h-1 w-full overflow-hidden rounded-full bg-black/10 ${className}`}>
      <div
        className="h-full rounded-full bg-sreda-red transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
