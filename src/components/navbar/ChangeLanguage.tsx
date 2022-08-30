import React from "react";
import useTranslation from "next-translate/useTranslation";
import i18nConfig from "../../../i18n.json";
import setLanguage from "next-translate/setLanguage";
import { Popover, Transition } from "@headlessui/react";
import { LanguageIcon, CheckIcon } from "@heroicons/react/24/solid";

const { locales } = i18nConfig;

const ChangeLanguage = () => {
  const { t, lang: selectedLocale } = useTranslation("common");

  return (
    <Popover as="nav">
      <Popover.Button className="flex flex-center">
        <LanguageIcon
          aria-label="language"
          className="h-8 w-8 text-black-500 hover:bg-slate-300 rounded p-1 m-1"
        ></LanguageIcon>
      </Popover.Button>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Popover.Panel className="absolute flex flex-col -translate-x-[50%] items-stretch bg-slate-200 mt-1 rounded shadow">
          {({ close }) => (
            <>
              {locales.map((locale) => {
                const selected: boolean = locale === selectedLocale;

                return (
                  <div
                    className={`${
                      !selected && "hover:bg-blue-300"
                    } px-2 py-1 m-0 rounded flex items-center`}
                  >
                    <CheckIcon
                      className={`w-4 h-4 mr-1 text-blue-800 ${
                        !selected && "opacity-0"
                      }`}
                      aria-hidden
                    ></CheckIcon>

                    <button
                      key={locale}
                      disabled={selected}
                      className={`${selected && "opacity-50"}`}
                      onClick={async () => await setLanguage(locale) && close()}
                    >
                      {t(locale)}
                    </button>
                  </div>
                );
              })}
            </>
          )}
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default ChangeLanguage;
