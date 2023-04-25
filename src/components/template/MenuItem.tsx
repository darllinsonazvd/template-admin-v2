import Link from 'next/link';

interface MenuItemProps {
  icon: any;
  text: string;
  url?: string;
  className?: string;
  onClick?: (event: any) => void;
}

export function MenuItem({ url, icon, text, onClick, className }: MenuItemProps) {
  function renderLink() {
    return (
      <p
        className={`flex flex-col justify-center items-center w-20 h-20 text-slate-600 transition-colors dark:text-slate-200 ${className}`}
      >
        {icon}
        <span className="text-xs font-normal">{text}</span>
      </p>
    );
  }

  return (
    <li
      onClick={onClick}
      className="transition-colors hover:bg-slate-300 dark:hover:bg-slate-800 cursor-pointer"
    >
      {url ? <Link href={url}>{renderLink()}</Link> : renderLink()}
    </li>
  );
}
