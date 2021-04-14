import {
  Edit,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
} from 'react-admin';

import { PostTitle } from './PostTitle';

export const PostEdit = props => {
  return (
    <Edit title={<PostTitle />} {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <ReferenceInput source='userId' reference='users'>
          <SelectInput optionText='name' />
        </ReferenceInput>
        <TextInput source='title' />
        <TextInput multiline source='body' />
      </SimpleForm>
    </Edit>
  );
};
