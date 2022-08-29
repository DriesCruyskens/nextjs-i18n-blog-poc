import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import styles from "./NavLink.module.scss";

type Props = {
  children?: ReactNode;
  href?: string;
};

function NavLink({ children, href = "/" }: Props) {
  const router = useRouter();

  return (
    <Link href={href}>
      <a className={router.asPath === href ? styles.active : ""}>{children}</a>
    </Link>
  );
}

export default NavLink;
