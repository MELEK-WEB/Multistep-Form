import { useState } from "react";
import FormWrapper from "./FormWrapper";

type UserAuth = {
  email: string;
  password: string;
};

type UserAuthProps = UserAuth & {
  updateFields: (fileds: Partial<UserAuth>) => void;
};

export function AccountForm({ email, password, updateFields }: UserAuthProps) {
  return (
    <FormWrapper title="Account">
      <label>Email</label>
      <input
        autoFocus
        required
        type={"email"}
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />
      <label>Password</label>
      <input
        required
        type={"password"}
        onChange={(e) => updateFields({ password: e.target.value })}
        value={password}
      />
    </FormWrapper>
  );
}
