import { Component } from 'react';
import { Formik } from 'formik';
import { BsSearch } from 'react-icons/bs';
import { Button, Header, SearchForm, Input } from './Searchbar.styled';

export class Searchbar extends Component {
  handleSubmit = ({ q }, { resetForm }) => {
    this.props.onSubmit(q);
    resetForm();
  };
  render() {
    return (
      <Header>
        <Formik initialValues={{ q: '' }} onSubmit={this.handleSubmit}>
          <SearchForm>
            <Button type="submit">
              <BsSearch />
            </Button>
            <Input type="text" name="q" />
          </SearchForm>
        </Formik>
      </Header>
    );
  }
}
