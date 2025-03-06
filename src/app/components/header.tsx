"use client";
import Link from "next/link";
import NavLink from "./nav-link";
import { removeAccessToken } from "../utils/action";

const leftLinks = [
  { href: "/", label: "Home" },
  { href: "/our-team", label: "Our Team" },
];

const rightLinks = [
  { href: "/login", label: "Login" },
  { href: "/register", label: "Register" },
];

export default function Header(user:any) {
  const logout = () => {
    removeAccessToken();
  };

  return (
    <header className="bg-white/50">
      <nav className="container mx-auto flex justify-between items-center py-4">
        <ul className="flex gap-4">
        <Link href="/">Our Cool Project</Link>
          {leftLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </ul>
        <ul className="flex gap-4">
          {user && user.user ? (
            <ul className="flex gap-4">
              <div className="text-black">{user.user?.username}</div>
              <div className="cursor-pointer" onClick={() => logout()}>
                Log Out
              </div>
            </ul>
          ) :(
            rightLinks.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))
          )}
            </ul>
      </nav>
    </header>
  );
}
