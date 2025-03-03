import React, {useState} from "react";
import DeletedTasks from "../pages/components/DeletedTasks";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {NotizTypes} from "@/pages/components/types";

const Wrapper = () => {
  const [noteList, setNoteList] = useState<NotizTypes[]>([]);
  const [deletedList, setDeletedList] = useState<NotizTypes[]>([{notiz: "DeletedNotiz1", completed: false, id: "id123"}]);

  return <DeletedTasks noteList={noteList} setNoteList={setNoteList} setDeletedList={setDeletedList} deletedList={deletedList} />;
};

test("Teste ob Deletebutton die note löscht.", async () => {
  render(<Wrapper />);

  const deleteButton = screen.getByRole("button", {name: /delete/i});

  const text = screen.getByText(/deletednotiz1/i);

  expect(text).toBeInTheDocument();

  await userEvent.click(deleteButton);

  expect(text).not.toBeInTheDocument();
});
