import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import CardModal from "./CardModal";
import { useDispatch, useSelector } from "react-redux";
import { setItemsInLocalStorage } from "../../utils/localStorage";
import { getCardDataOnClick, setDelete } from "../../slices/CardSlice";

function Cards({ notes }) {
  const [operationModal, setOperationModal] = useState(false);
  const [operation, setOperation] = useState("add");
  const [deleteModal, setDeleteModal] = useState(false);
  const [notesList, setNotesList] = useState(notes);
  const searchInput = useSelector((state) => state.CardSlice.searchInput);
  const dispatch = useDispatch();
  useEffect(() => {
    setNotesList(notes);
  }, [notes]);

  const deleteNote = (id) => {
    // const afterDeleteItem = notesList.filter((note) => note.id !== id);
    // setItemsInLocalStorage(afterDeleteItem);
    // setNotesList(afterDeleteItem);
    dispatch(setDelete(id));
    
    // window.location.reload();
  };

  const editNote = (id) => {
    setOperationModal(true);
    setOperation("edit");
    console.log("Edit note", id);
    dispatch(getCardDataOnClick(id));
    // Add your edit logic here
  };

  const viewNote = (id) => {
    setOperationModal(true);
    setOperation("view");
    dispatch(getCardDataOnClick(id));
  };
  return (
    <>
      <div className="note-cards">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {notesList.length ? (
              notesList
                .filter(({ title }) =>
                  title.toLowerCase().includes(searchInput.toLowerCase())
                )
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
                      Created at: {note.date}
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
                ))
            ) : (
              <h1 className="text-white">Your Notes will be display Here</h1>
            )}
          </div>
        </div>
      </div>

      {/* ============================== MODAL ==================================== */}
      <CardModal
        operationModal={operationModal}
        setOperationModal={setOperationModal}
        operation={operation}
      />
    </>
  );
}

export default Cards;
