import AddTask from "../pages/components/AddTask";

import {render, screen} from "@testing-library/react";
import React from "react";
import userEvent from "@testing-library/user-event";

test("Teste Ob Neues hinzufügen funktioniert", async () => {
  const setMock = jest.fn();

  render(<AddTask setNoteList={setMock} />);

  const addTaskButton = screen.getByRole("button", {name: /add task/i});
  const textBoxInput = screen.getByRole("textbox");

  await userEvent.type(textBoxInput, "Hallo Text1");
  await userEvent.click(addTaskButton);

  expect(textBoxInput).toHaveValue("");

  expect(setMock).toHaveBeenCalled();

  screen.logTestingPlaygroundURL();
});
