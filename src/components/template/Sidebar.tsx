import { HomeIcon, LogoutIcon, NotificationIcon, SettingsIcon } from '../icons';
import { Logo } from './Logo';
import { MenuItem } from './MenuItem';

export function Sidebar() {
  return (
    <aside className="flex flex-col bg-slate-200 text-slate-900 dark:bg-slate-950 dark:text-slate-200">
      <div className="w-20 h-20 flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 to-purple-800">
        <Logo />
      </div>
      <ul className="flex-1">
        <MenuItem url="/" text="Início" icon={HomeIcon} />
        <MenuItem url="/notifications" text="Notificações" icon={NotificationIcon} />
        <MenuItem url="/settings" text="Ajustes" icon={SettingsIcon} />
      </ul>
      <ul>
        <MenuItem
          className="text-red-600 hover:bg-red-600 hover:text-white dark:text-slate-200 dark:bg-red-500 dark:hover:bg-red-600"
          onClick={() => alert('Usuário desconectado')}
          text="Sair"
          icon={LogoutIcon}
        />
      </ul>
    </aside>
  );
}
