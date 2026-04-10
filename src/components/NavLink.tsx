import { forwardRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  className?: string;
  activeClassName?: string;
  children: ReactNode;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ href, className, activeClassName, children, ...props }, ref) => {
    return (
      <a ref={ref} href={href} className={cn(className, activeClassName)} {...props}>
        {children}
      </a>
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
