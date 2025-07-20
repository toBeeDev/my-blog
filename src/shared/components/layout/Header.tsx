"use client";
import Image from "next/image";
import React, { Fragment } from "react";
import logo from "@/img/logos/dark.svg";
import Link from "next/link";
import { IoCloseCircleOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Popover, Transition } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";
import ThemeButton from "@/shared/components/common/ThemeButton";

const NavItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  let isActive = usePathname() === href;
  return (
    <li>
      <Link
        href={href}
        className={clsx(
          "relative block px-3 py-2 transition",
          isActive
            ? "text-sky-500 dark:text-sky-400"
            : "hover:text-sky-500 dark:hover:text-sky-400"
        )}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-sky-50/0 via-sky-500/40 to-sky-50/0 dark:from-sky-400/0 dark:via-sky-400/40 dark:to-sky-400/0" />
        )}
      </Link>
    </li>
  );
};

const DesktopNavigation = (props: React.ComponentPropsWithRef<"nav">) => {
  return (
    <nav {...props}>
      <ul className="flex rounded-md px-3 text-md font-medium">
        {/* <NavItem href="/about">About</NavItem> */}
        <NavItem href="/posts">Post</NavItem>
        <NavItem href="/projects">Project</NavItem>
      </ul>
    </nav>
  );
};

const MobileNavItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <li>
      <Popover.Button
        as={Link}
        href={href}
        className="block py-2 hover:text-sky-500 border-b-sky-800 dark:border-b-sky-100/5 hover:border-b-sky-500/5 duration-300"
      >
        {children}
      </Popover.Button>
    </li>
  );
};

const MobileNavigation = (
  props: React.ComponentPropsWithoutRef<typeof Popover>
) => {
  return (
    <Popover {...props}>
      <Popover.Button className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-sky-800 shadow-lg shadow-sky-800/5 ring-1 ring-sky-900/5 backdrop-blur dark:bg-sky-800/90 dark:text-sky-200 dark:ring-white/10 dark:hover:ring-white/20">
        메뉴
        <FaChevronDown className="ml-3 h-auto w-2 stroke-sky-50 group-hover:stroke-sky-700 dark:group-hover:stroke-sky-400" />
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed z-50 bg-sky-800/40 backdrop-blur-sm dark:bg-black/80" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="fixed w-full left-0 top-0 z-50 origin-top rounded-b-md bg-white p-8 ring-1 ring-sky-900/5 dark:bg-sky-900 dark:ring-sky-800"
          >
            <div className="flex flex-row-reverse items-center justify-between">
              <Popover.Button aria-label="Close menu" className="-m-1 p-1">
                <IoCloseCircleOutline className="h-6 w-6 text-sky-500 dark:text-sky-400" />
              </Popover.Button>
              <h2 className="text-sm font-medium">📂</h2>
            </div>
            <nav className="mt-6">
              <ul className="-my-2 text-base text-sky-800 dark:divide-sky-100/5 dark:text-sky-300">
                {/* <MobileNavItem href="/about">About</MobileNavItem> */}
                <MobileNavItem href="/posts">Post</MobileNavItem>
                <MobileNavItem href="/projects">Project</MobileNavItem>
              </ul>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
};

const Header = () => {
  return (
    <header className="top-0 -mb-3 py-5 w-full mx-auto px-4 md:px-10 flex gap-10 justify-between items-center">
      <Link href={"/"}>
        <Image src={logo} width={36} height={36} alt="logo" />
      </Link>
      <div className="flex md:flex-1 justify-end">
        {/* desktop navigation */}
        <DesktopNavigation className="pointer-events-auto hidden md:block" />
      </div>
      <div className="flex items-center gap-5">
        {/* MobileNavigation */}
        <MobileNavigation className="pointer-events-auto md:hidden" />
        <ThemeButton />
      </div>
    </header>
  );
};

export default Header;
