import { HomeIcon, NotificationIcon, SettingsIcon } from '../icons';
import { MenuItem } from './MenuItem';

export function Sidebar() {
  return (
    <aside>
      <ul>
        <MenuItem url="/" text="Início" icon={HomeIcon} />
        <MenuItem url="/notifications" text="Notificações" icon={NotificationIcon} />
        <MenuItem url="/settings" text="Ajustes" icon={SettingsIcon} />
      </ul>
    </aside>
  );
}
