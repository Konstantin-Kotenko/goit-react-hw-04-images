import { Formik } from 'formik';
import { BsSearch } from 'react-icons/bs';
import { Button, Header, SearchForm, Input } from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = ({ q }, { resetForm }) => {
    onSubmit(q);
    resetForm();
  };

  return (
    <Header>
      <Formik initialValues={{ q: '' }} onSubmit={handleSubmit}>
        <SearchForm>
          <Button type="submit">
            <BsSearch />
          </Button>
          <Input type="text" name="q" />
        </SearchForm>
      </Formik>
    </Header>
  );
};
