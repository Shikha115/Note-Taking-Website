import React, { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import CardModal from "./CardModal";
import { useSelector } from "react-redux";

function Cards({ notes }) {
  //input
  const [operationModal, setOperationModal] = useState(false);
  const [operation, setOperation] = useState("add");
  const [deleteModal, setDeleteModal] = useState(false);
  const input = useSelector((state) => state.CardSearch.input);
  console.log(input, "input");
  const deleteNote = (id) => {
    setDeleteModal(true);
    setNoteList(noteList.filter((note) => note._id !== id));
  };

  const editNote = (id) => {
    setOperationModal(true);
    setOperation("edit");
    console.log("Edit note", id);
    // Add your edit logic here
  };

  const viewNote = (id) => {
    setOperationModal(true);
    setOperation("view");
    console.log("View note", id);
    // Add your view logic here
  };
  return (
    <>
      <div className="note-cards">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {notes &&
              notes
                // .filter(({ title }) =>
                //   title.toLowerCase().includes(input.toLowerCase())
                // )
                .map((note) => (
                  <div
                    key={note._id}
                    className="cards p-5 border rounded-lg shadow-lg"
                  >
                    <h2 className="text-xl text-white font-bold mb-2">
                      {note.title}
                    </h2>
                    <p className="text-gray-100 mb-4">{note.content}</p>
                    <p className="text-gray-100 text-sm mb-4">
                      Created at: {new Date(note.timestamp).toLocaleString()}
                    </p>
                    <div className="flex space-x-3">
                      <button
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                        onClick={() => viewNote(note.id)}
                      >
                        View
                      </button>
                      <button
                        className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-700"
                        onClick={() => editNote(note.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
                        onClick={() => deleteNote(note.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>

      {/* ============================== MODAL ==================================== */}
      <CardModal
        operationModal={operationModal}
        setOperationModal={setOperationModal}
        operation={operation}
      />
      {/* ============================== MODAL ==================================== */}
      <Dialog
        open={deleteModal}
        onClose={() => setDeleteModal(false)}
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
                    Delete the Note
                  </DialogTitle>
                  <div className="mt-3 text-center sm:mt-0 sm:text-left">
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Are you sure you want to deactivate your account? All of
                        your data will be permanently removed. This action
                        cannot be undone.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  onClick={() => setOperationModal(false)}
                  className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                >
                  Deactivate
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
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default Cards;
