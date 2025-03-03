import {FC, useState} from "react";
import {AddTaskProps} from "./types";
import {v4 as uuidv4} from "uuid";
import React from "react";

const AddTask: FC<AddTaskProps> = ({setNoteList}) => {
  const [notizState, setNotizState] = useState<string>("");

  const addNewNote = () => {
    const id = uuidv4();
    setNoteList((prev) => [...prev, {notiz: notizState, completed: false, id: id}]);
    setNotizState("");
  };

  return (
    <div className="flex  mt-12 mb-12">
      <input
        value={notizState}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNotizState(e.currentTarget.value)}
        className="border"
      />
      <button onClick={addNewNote} className="p-2 text-white bg-blue-300">
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
