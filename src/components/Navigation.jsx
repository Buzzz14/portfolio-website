import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import "./Navigation.css"

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "About", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  return (
    <Disclosure as="nav" className="bg-[#212A31]">
      <div className="mx-auto max-w-7xl px-8">
        <div className="relative flex h-20 items-center justify-between">
          <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white focus:outline-none ring-1 ring-inset ring-gray-400">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-4 w-4 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-4 w-4 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>

          <div className="flex flex-1 justify-between items-center md:items-stretch">
            <div className="flex flex-shrink-0 items-center">
              <p className="text-slate-300 font-semibold text-3xl">SB</p>
            </div>
            <div className="hidden md:ml-6 md:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? " text-white"
                        : "text-gray-300",
                      "rounded-md py-2 text-xl pe-8 font-medium relative"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="md:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "text-white"
                  : "text-gray-600 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-normal text-center"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
