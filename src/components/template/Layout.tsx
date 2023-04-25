import { Content } from './Content';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

interface LayoutProps {
  title: string;
  subtitle: string;
  children?: any;
}

export function Layout({ title, subtitle, children }: LayoutProps) {
  return (
    <div className="dark flex h-screen w-screen">
      <Sidebar />
      <div className="flex flex-col w-full p-7 bg-slate-100 dark:bg-slate-900">
        <Header title={title} subtitle={subtitle} />
        <Content>{children}</Content>
      </div>
    </div>
  );
}
