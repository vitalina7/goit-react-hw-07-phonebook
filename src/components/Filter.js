
import { Label, Input } from './Phonebook.styled';
import { setFilter } from 'redux/FilterSlice';
import { selectFilter } from 'redux/Selectors';
import { useDispatch,useSelector } from 'react-redux';


export const Filter = () => {
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();



    return (
        <div>
             <Label>
         Find contacts by name
          <Input
            type="text"
            name="filter"
            onChange={event=>dispatch(setFilter(event.currentTarget.value))}
            value={filter}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        </div>
    )
}

