import { Edit, SimpleForm, TextInput, UrlField } from 'react-admin';

export const UserEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source='id' />
      <TextInput source='name' />
      <TextInput source='username' />
      <TextInput source='email' />
      <TextInput source='address.street' label='Address' />
      <TextInput source='phone' />
      <UrlField source='website' />
      <TextInput source='company.name' label='Company' />
    </SimpleForm>
  </Edit>
);
