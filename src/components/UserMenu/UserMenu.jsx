import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Wrapper, UserName, LogOutButton } from './UserMenuStyled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <UserName>Welcome, {user.name}</UserName>
      <LogOutButton type="button" onClick={() => dispatch(logOut())}>
        Logout
      </LogOutButton>
    </Wrapper>
  );
};
