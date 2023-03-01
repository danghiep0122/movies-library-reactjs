import { DeleteBtn } from '../../assets/img/icon/allIcon';

const SearchForm = () => {
  return (
    <form>
      <input name="text" type="text" placeholder="Search ?" />
      <DeleteBtn height="1rem" width="1rem" />
      <button>Search</button>
    </form>
  );
};

export default SearchForm;
