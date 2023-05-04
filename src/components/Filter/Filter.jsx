import { useDispatch, useSelector } from "react-redux";
import { getFilter } from "redux/selectors";
import { filterContact } from "redux/contactsSlice";

const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);

    const onFilter = event => {
        dispatch(filterContact(event.target.value));
    };

    return (
        <input
            type="text"
            name="filter"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={filter}
            onChange={onFilter}
            required
          />
    )
}

export default Filter;