import React, { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../slices/CardSearchSlice";

function CardModal({ operationModal, setOperationModal, operation }) {
  const [inputData, setInputData] = useState({});
  const dispatch = useDispatch();
  const viewData = useSelector((state) => state.CardSearch.viewData);
  console.log("🚀 ~ CardModal ~ viewData:", viewData);
  const Check = (inputData) => {
    setOperationModal(false);
    dispatch(setData(inputData));
  };
  return (
    <Dialog
      open={operationModal}
      onClose={() => setOperationModal(false)}
      className="relative z-10"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div>
                <DialogTitle
                  as="h2"
                  className="text-base font-semibold leading-6 text-gray-900"
                >
                  {operation == "add"
                    ? "Add a Note"
                    : operation == "edit"
                    ? "Edit the Note"
                    : "View Note"}
                </DialogTitle>
                <div className="mt-3 text-center sm:mt-0 sm:text-left">
                  <form action="">
                    <div className="mb-3">
                      <label>Title</label>
                      <input
                        type="text"
                        value={
                          operation == "add"
                            ? inputData.title
                            : operation == "view"
                            ? viewData.title
                            : ""
                        }
                        className="mt-1 border block w-full px-3 py-1 rounded-sm border-gray-300 shadow-sm focus-visible:outline-0"
                        onChange={(e) =>
                          setInputData((prev) => {
                            return { ...prev, title: e.target.value };
                          })
                        }
                        readOnly={operation == "view" ? true : false}
                      />
                    </div>
                    <div className="mb-3">
                      <label>Content</label>
                      <input
                        type="text"
                        value={
                          operation == "add"
                            ? inputData.content
                            : operation == "view"
                            ? viewData.content
                            : ""
                        }
                        className="mt-1 border block w-full px-3 py-1 rounded-sm border-gray-300 shadow-sm focus-visible:outline-0"
                        onChange={(e) =>
                          setInputData((prev) => {
                            return { ...prev, content: e.target.value };
                          })
                        }
                        readOnly={operation == "view" ? true : false}
                      />
                    </div>
                    <div className="bg-gray-50 py-3 sm:flex sm:flex-row-reverse">
                      <button
                        type="button"
                        onClick={() => {
                          Check(inputData);
                        }}
                        className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto"
                      >
                        Submit
                      </button>
                      <button
                        type="button"
                        data-autofocus
                        onClick={() => setOperationModal(false)}
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}

export default CardModal;
