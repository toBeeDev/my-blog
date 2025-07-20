import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="px-10 border-t border-t-sky-100 py-10 dark:border-sky-700/40
        flex items-center justify-between"
    >
      <div>
        <div className="flex flex-col md:flex-row justify-center gap-x-6 gap-y-1 text-sm font-medium text-sky-800 dark:text-sky-200">
          {/* <Link href={"/about"}>About</Link> */}
          <Link href={"/posts"}>Post</Link>
          <Link href={"/projects"}>Project</Link>
        </div>
      </div>
      <p className="text-sm text-sky-500 dark:text-sky-400">
        &copy; {new Date().getFullYear()} Bee all rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
