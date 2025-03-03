import {FC, useState} from "react";
import {AddTaskProps, HandleFunctions, NotelistProps, NotizTypes} from "./types";
import React from "react";

const Note: FC<NotizTypes & AddTaskProps & NotelistProps & HandleFunctions> = ({
  notiz,
  completed,
  id,
  setNoteList,
  noteList,
  handleDelete,
  handleDeleteBack,
  deleteNoteChecker,
}) => {
  const changeComplete = (id: string) => {
    const newChanged = noteList.map((note) => {
      if (note.id === id)
        return {
          ...note,
          completed: !note.completed,
        };
      return note;
    });

    setNoteList(newChanged);
  };

  const [editChecker, setEditChecker] = useState<boolean>(false);
  const [editedNote, setEditedNote] = useState<string>("");

  const handleSaveChange = () => {
    setEditChecker((prev) => !prev);
    console.log(id);

    const bearbeiter = noteList.map((e) => {
      if (e.id === id)
        return {
          ...e,
          notiz: editedNote,
        };
      return e;
    });

    setNoteList(bearbeiter);
  };

  const handleBearbeiten = () => {
    setEditChecker((prev) => !prev);

    setEditedNote(notiz);
  };

  return (
    <div className="flex justify-between items-center">
      <section className="flex items-center gap-2">
        <input checked={completed} className="w-6 h-6" type="checkbox" onChange={() => changeComplete(id)} />
        {!editChecker ? (
          <p key={id}>{notiz}</p>
        ) : (
          <input
            className="border-2"
            value={editedNote}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditedNote(e.currentTarget.value)}
          />
        )}
      </section>

      <section className="flex gap-6">
        {deleteNoteChecker && <button onClick={handleDeleteBack}>Rückgänging</button>}

        <button onClick={() => handleDelete()} className="p-2 border">
          Delete
        </button>

        {!editChecker ? (
          <button onClick={handleBearbeiten} className="p-2 border">
            Bearbeiten
          </button>
        ) : (
          <button onClick={handleSaveChange} className="border p-2 bg-red-200">
            Save
          </button>
        )}
      </section>
    </div>
  );
};

export default Note;
