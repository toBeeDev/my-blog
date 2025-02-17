import Link from "next/link";
import clsx from "clsx";

const variantStyles = {
  primary:
    "bg-sky-800 font-semibold text-sky-100 hover:bg-sky-700 active:bg-sky-800 active:text-sky-100/70 dark:bg-sky-700 dark:hover:bg-sky-600 dark:active:bg-sky-700 dark:active:text-sky-100/70",
  secondary:
    "bg-sky-50 font-medium text-sky-900 hover:bg-sky-100 active:bg-sky-100 active:text-sky-900/60 dark:bg-sky-800/50 dark:text-sky-300 dark:hover:bg-sky-800 dark:hover:text-sky-50 dark:active:bg-sky-800/50 dark:active:text-sky-50/70",
};

type ButtonProps = {
  variant?: keyof typeof variantStyles;
} & (
  | (React.ComponentPropsWithoutRef<"button"> & { href?: undefined })
  | React.ComponentPropsWithoutRef<typeof Link>
);

export function Button({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  className = clsx(
    "inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none",
    variantStyles[variant],
    className
  );

  return typeof props.href === "undefined" ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  );
}
