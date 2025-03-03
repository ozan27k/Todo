import {FC} from "react";
import {AddTaskProps, DeletedListProps, DeletedListPropsSetState, NotelistProps} from "./types";
import Note from "./Note";
import React from "react";

const DeletedTasks: FC<DeletedListProps & DeletedListPropsSetState & NotelistProps & AddTaskProps> = ({
  deletedList,
  noteList,
  setNoteList,
  setDeletedList,
}) => {
  const handleDelete = (id: string) => {
    const deletedListFilter = deletedList.filter((e) => e.id !== id);

    setDeletedList(deletedListFilter);
  };

  const handleDeleteBack = (id: string) => {
    const findTheNote = deletedList.find((e) => e.id === id);

    console.log("Das ist die DeletedNote", findTheNote);

    if (findTheNote) {
      setNoteList((prev) => [...prev, findTheNote]);
    }

    const deletedListFilter = deletedList.filter((e) => e.id !== id);

    setDeletedList(deletedListFilter);
  };

  return (
    <div className="mt-16">
      <h1>DeletedTasks</h1>

      {deletedList.map((e) => (
        <Note
          key={e.id}
          id={e.id}
          notiz={e.notiz}
          completed={e.completed}
          noteList={noteList}
          setNoteList={setNoteList}
          handleDelete={() => handleDelete(e.id)}
          handleDeleteBack={() => handleDeleteBack(e.id)}
          deleteNoteChecker={true}
        />
      ))}
    </div>
  );
};

export default DeletedTasks;
