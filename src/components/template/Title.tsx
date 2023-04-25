interface TitleProps {
  title: string;
  subtitle: string;
}

export function Title({ title, subtitle }: TitleProps) {
  return (
    <div>
      <h1 className="font-bold text-3xl text-slate-900 dark:text-slate-200">{title}</h1>
      <h2 className="font-normal text-sm text-slate-600 dark:text-slate-400">{subtitle}</h2>
    </div>
  );
}
