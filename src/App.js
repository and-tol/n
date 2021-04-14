import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import './App.css';

import { authProvider } from './api/authProvider';

import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';

import { UserList, UserEdit, UserCreate } from './users';
import { PostList, PostEdit, PostCreate } from './posts';
import { Dashboard } from './Dashboard';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

function App() {
  return (
    <Admin
      dashboard={Dashboard}
      dataProvider={dataProvider}
      authProvider={authProvider}
    >
      <Resource
        name='users'
        list={UserList}
        edit={UserEdit}
        create={UserCreate}
        icon={UserIcon}
      />
      <Resource
        name='posts'
        list={PostList}
        edit={PostEdit}
        create={PostCreate}
        icon={PostIcon}
      />
    </Admin>
  );
}

export default App;
