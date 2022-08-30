import NavLink from "./NavLink";
import useTranslation from "next-translate/useTranslation";
import ChangeLanguage from "./ChangeLanguage";
import { Popover } from "@headlessui/react";

const Navbar = () => {
  const { t } = useTranslation("nav");
  return (
    <div className="bg-slate-100 mb-5">
      <Popover.Group className="w-4/5 mx-auto flex justify-between">
        <nav className="flex justify-center items-center">
          <ul className="flex gap-10">
            <li>
              <NavLink href="/">{t("home")}</NavLink>
            </li>
            <li>
              <NavLink href="/blog">{t("blog")}</NavLink>
            </li>
          </ul>
        </nav>
        <ChangeLanguage></ChangeLanguage>
      </Popover.Group>
    </div>
  );
};

export default Navbar;
