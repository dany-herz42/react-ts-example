import { ChangeEventHandler, MouseEventHandler, useState } from "react";
import Input from "../Input";
import Button from "../Button";

export type UserFormState = {
  name: string;
  userName: string;
};

interface UserFormProps {
  handleSubmit: (user: UserFormState) => void
}

const InitialValue: UserFormState = { name: "", userName: "" };

export default function UserForm({ handleSubmit }: UserFormProps) {
  const [form, setForm] = useState(InitialValue);

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    handleSubmit(form);
    setForm(InitialValue)
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const valueName = e.target.name as keyof UserFormState;
    setForm({ ...form, [valueName]: e.target.value });
  };

  return (
    <>
      <Input value={form.name} name="name" placeholder="Name" handleChange={handleChange} />
      <Input
        value={form.userName}
        name="userName"
        placeholder="UserName"
        handleChange={handleChange}
      />
      <Button handleClick={handleClick}>Enviar</Button>
    </>
  );
}
