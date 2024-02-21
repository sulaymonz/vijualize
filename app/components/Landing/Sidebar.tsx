import SidebarTab from './SidebarTab';

export default function Sidebar() {
  return (
    <div className="flex flex-row justify-start items-center h-full font-mono bg-black text-white">
      <ul>
        <SidebarTab title="Outfit" />
        <SidebarTab title="Tech" />
        <SidebarTab title="Boxing" />
        <SidebarTab title="UI" />
        <SidebarTab title="Posters" />
        <SidebarTab title="All" />
      </ul>
    </div>
  );
}
