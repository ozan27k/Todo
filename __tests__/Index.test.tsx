import {render, screen} from "@testing-library/react";
import Index from "../pages/index";
import React from "react";
import userEvent from "@testing-library/user-event";
test("Teste ob Löschen und rückgänging möglich sind.", async () => {
  render(<Index />);

  const textBox = screen.getByRole("textbox");
  const addButton = screen.getByRole("button", {name: /add Task/i});

  await userEvent.type(textBox, "Test1");

  await userEvent.click(addButton);

  const testText = screen.getByText(/test1/i);
  const buttonDelete = screen.getByRole("button", {name: /delete/i});
  const buttonBearbeiten = screen.getByRole("button", {name: /bearbeiten/i});

  expect(testText).toBeInTheDocument();
  expect(buttonDelete).toBeInTheDocument();
  expect(buttonBearbeiten).toBeInTheDocument();

  await userEvent.click(buttonDelete);

  const ruckgangButton = screen.getByRole("button", {name: /rückgänging/i});

  expect(ruckgangButton).toBeInTheDocument();

  await userEvent.click(ruckgangButton);

  expect(ruckgangButton).not.toBeInTheDocument();
});

test("Teste ob Checkbox Pfeil funktioniert..", async () => {
  render(<Index />);

  const textBox = screen.getByRole("textbox");
  const addButton = screen.getByRole("button", {name: /add Task/i});

  await userEvent.type(textBox, "Test1");

  await userEvent.click(addButton);

  const checkBox = screen.getByRole("checkbox");

  await userEvent.click(checkBox);

  expect(checkBox).toBeChecked();

  screen.logTestingPlaygroundURL();
});

test("Teste ob Bearbeiten funktioniert", async () => {
  render(<Index />);

  const textBox = screen.getByRole("textbox");
  const addButton = screen.getByRole("button", {name: /add Task/i});

  await userEvent.type(textBox, "Test1");

  await userEvent.click(addButton);

  const beArbeitenKnopf = screen.getByRole("button", {name: /bearbeiten/i});

  await userEvent.click(beArbeitenKnopf);

  const inputBox = screen.getAllByRole("textbox");

  await userEvent.clear(inputBox[1]);

  await userEvent.type(inputBox[1], "bearbeiteter Text");

  const saveButton = screen.getByRole("button", {name: /save/i});

  await userEvent.click(saveButton);

  const findEndText = screen.getByText(/bearbeiteter text/i);

  expect(findEndText).toBeInTheDocument();

  screen.logTestingPlaygroundURL();
});
