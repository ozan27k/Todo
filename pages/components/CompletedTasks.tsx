import {FC} from "react";
import Note from "./Note";
import {AddTaskProps, DeletedListPropsSetState, NotelistProps} from "./types";
import React from "react";

const CompletedTasks: FC<NotelistProps & AddTaskProps & DeletedListPropsSetState> = ({noteList, setNoteList, setDeletedList}) => {
  const handleDelete = (id: string) => {
    const afterDelete = noteList.filter((e) => e.id !== id);
    setNoteList(afterDelete);

    const findTheNote = noteList.find((e) => e.id === id);

    console.log("Das ist die DeletedNote", findTheNote);

    if (findTheNote) {
      setDeletedList((prev) => [...prev, findTheNote]);
    }
  };

  return (
    <div className="mt-24">
      <h1>CompletedTasks</h1>

      {noteList.map(
        (e) =>
          e.completed && (
            <Note
              key={e.id}
              id={e.id}
              notiz={e.notiz}
              completed={e.completed}
              noteList={noteList}
              setNoteList={setNoteList}
              handleDelete={() => handleDelete(e.id)}
            />
          )
      )}
    </div>
  );
};

export default CompletedTasks;
