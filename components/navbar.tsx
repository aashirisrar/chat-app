import Link from "next/link";

const routes = [
  {
    label: "Create User",
    href: "/create-user",
  },
  {
    label: "View all Users",
    href: "/view-all-users",
  },
  {
    label: "View User by Id",
    href: "/view-user-by-id",
  },
  {
    label: "Create Item",
    href: "/create-item",
  },

  {
    label: "View all Items",
    href: "/view-all-items",
  },

  {
    label: "View Item by Id",
    href: "/view-item-by-id",
  },
];

const Navbar = () => {
  return (
    <div className="flex items-center justify-center gap-6 p-5 bg-secondary-foreground text-primary-foreground font-semibold children *:cursor-pointer">
      {routes.map((route) => (
        <div className="hover:bg-primary-foreground hover:text-primary transition py-1 px-2 rounded">
          <Link href={route.href}>{route.label}</Link>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
