interface NavItemProps {
  navItemName: string;
  icon: React.ReactNode;
}

const NavItem = ({ navItemName, icon }: NavItemProps) => {
  return (
    <li className="relative">
      <button className="focus:bg-slate-600 hover:bg-slate-600 flex w-full space-x-2 rounded-md px-10 py-4 text-gray-300 focus:outline-none">
        <span>{icon}</span>
        <span>{navItemName}</span>
      </button>
    </li>
  );
};

export { NavItem }; 
