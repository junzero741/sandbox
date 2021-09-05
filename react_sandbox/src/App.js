import { useReducer, useRef, useCallback, useMemo } from 'react';

import userInitialState from './store/userInitialState';
import userReducer from './reducer/userReducer';
import countActiveUsers from './utils/countActiveUsers';

import UserList from './components/UserList';
import CreateUser from './components/CreateUser';

function App() {
  const [state, dispatch] = useReducer(userReducer, userInitialState);
  const nextId = useRef(4);

  const { users } = state;
  const { username, email } = state.inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: 'CHANGE_INPUT',
      name,
      value,
    });
  };

  const onCreate = () => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email,
      },
    });
    nextId.current += 1;
  };

  const onToggle = (id) => {
    dispatch({
      type: 'TOGGLE_USER',
      id,
    });
  };

  const onRemove = (id) => {
    dispatch({
      type: 'REMOVE_USER',
      id,
    });
  };

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
      <UserList users={users} onToggle={onToggle} onRemove={onRemove} />
      <div>활성사용자 수 : {count}</div>
    </>
  );
}

export default App;
