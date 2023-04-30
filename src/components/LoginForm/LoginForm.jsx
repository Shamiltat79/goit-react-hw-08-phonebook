import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { FormWrapper, LogButton, Label, Input   } from './LoginFormStyled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormWrapper  onSubmit={handleSubmit} autoComplete="off">
      <Label >
        Email
        <Input type="email" name="email" />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" />
      </Label>
      <LogButton type="submit">Log In</LogButton>
    </FormWrapper>
  );
};