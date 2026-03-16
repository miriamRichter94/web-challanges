import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  render(<Input labelText="Name" placeholder="Enter name" name="name" />);
  const inputLabel = screen.getByText("Name");
  expect(inputLabel).toBeInTheDocument();

  const inputField = screen.getByRole("textbox", { name: "Name" });
  expect(inputField).toHaveAttribute("placeholder", "Enter name");
});

test("calls callback on every user input", async () => {
  const user = userEvent.setup();
  const funct = jest.fn();
  render(
    <Input
      labelText="Name"
      placeholder="Enter name"
      name="name"
      onChange={funct}
    />,
  );
  const inputField = screen.getByRole("textbox", { name: "Name" });
  await user.type(inputField, "Mike");
  expect(funct).toHaveBeenCalled();
});
