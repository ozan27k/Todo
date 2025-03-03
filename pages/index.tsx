import React from "react";
import {useState} from "react";
import AddTask from "./components/AddTask";
import Notelist from "./components/Notelist";
import {NotizTypes} from "./components/types";
import CompletedTasks from "./components/CompletedTasks";
import DeletedTasks from "./components/DeletedTasks";

export default function Home() {
  const [noteList, setNoteList] = useState<NotizTypes[]>([]);
  const [deletedList, setDeletedList] = useState<NotizTypes[]>([]);

  return (
    <div className="w-[40%] mx-auto">
      <h1 className="text-3xl text-center">TODO LIST</h1>
      <AddTask setNoteList={setNoteList} />
      <Notelist noteList={noteList} setNoteList={setNoteList} setDeletedList={setDeletedList} />

      <hr />

      <CompletedTasks noteList={noteList} setNoteList={setNoteList} setDeletedList={setDeletedList} />

      <DeletedTasks deletedList={deletedList} noteList={noteList} setNoteList={setNoteList} setDeletedList={setDeletedList} />
    </div>
  );
}
