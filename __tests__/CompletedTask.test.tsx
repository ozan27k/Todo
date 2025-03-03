import {render, screen} from "@testing-library/react";
import CompletedTasks from "../pages/components/CompletedTasks";
import React from "react";

const setDeletedList = jest.fn();
test("Teste on Complete True angezeigt wird", () => {
  const noteList = [{notiz: "notiz1", completed: true, id: "id123"}];
  const setNoteList = jest.fn();

  render(<CompletedTasks setNoteList={setNoteList} noteList={noteList} setDeletedList={setDeletedList} />);

  const textNote = screen.getByText(/notiz1/i);

  expect(textNote).toBeInTheDocument();
});

test("Teste on Complete False nicht,  angezeigt wird", () => {
  const noteList = [{notiz: "notizFalse", completed: false, id: "id123"}];
  const setNoteList = jest.fn();

  render(<CompletedTasks setNoteList={setNoteList} noteList={noteList} setDeletedList={setDeletedList} />);

  const textNote = screen.queryByText(/notizFalse/i);

  expect(textNote).not.toBeInTheDocument();
});
