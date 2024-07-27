import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import logo from "../assets/images/logo.png";
import "../assets/scss/style.scss";
import CardModal from "./NoteCards/CardModal";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setInput } from "../slices/CardSearchSlice";

function Header() {
  //{ setInput, input }
  const [operationModal, setOperationModal] = useState(false);
  const [operation, setOperation] = useState("add");
  const input = useSelector((state) => state.CardSearch.input);
  const dispatch = useDispatch();
  return (
    <header>
      <Disclosure as="nav" className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block h-6 w-6 group-data-[open]:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden h-6 w-6 group-data-[open]:block"
                />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  alt="Note Taking Application"
                  src={logo}
                  className="h-8 w-auto"
                />
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="search-input">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="of si axv"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <input
                  ame="search"
                  type="search"
                  placeholder="Search"
                  value={input}
                  onChange={(e) =>
                    dispatch(setInput(e.target.value))
                  }
                />
              </div>

              {/* Profile dropdown */}
              <div className="relative ml-3">
                <button
                  className="bg-cyan-500	 text-white py-2 px-3 rounded-md font-medium"
                  onClick={() => {
                    setOperation("add");
                    setOperationModal(true);
                  }}
                >
                  Add New Note
                </button>
              </div>
            </div>
          </div>
        </div>
      </Disclosure>
      {/* ============================== MODAL ==================================== */}
      <CardModal
        operationModal={operationModal}
        setOperationModal={setOperationModal}
        operation={operation}
      />
    </header>
  );
}

export default Header;
