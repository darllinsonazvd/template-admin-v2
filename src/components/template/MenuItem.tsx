import Link from 'next/link';

interface MenuItemProps {
  url: string;
  icon: any;
  text: string;
}

export function MenuItem({ url, icon, text }: MenuItemProps) {
  return (
    <li className="transition-colors hover:bg-slate-300">
      <Link href={url}>
        <p className="flex flex-col justify-center items-center w-20 h-20">
          {icon}
          <span className="text-xs font-light text-slate-600">{text}</span>
        </p>
      </Link>
    </li>
  );
}
