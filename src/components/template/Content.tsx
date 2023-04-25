interface ContentProps {
  children?: any;
}

export function Content({ children }: ContentProps) {
  return <div className="flex flex-col mt-7 text-slate-900 dark:text-slate-200">{children}</div>;
}
