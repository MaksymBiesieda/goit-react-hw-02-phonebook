import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem/ContactItem';
import css from './ContactList.module.css';

export default function ContactList({ data, filterResult, onDeleteContact }) {
    return (
    <ul className={css.list}>
            {filterResult !== '' ? filterResult.map(contact => (<ContactItem key={contact.id} data={contact} onDeleteContact={onDeleteContact} />))  : data.map(item => (<ContactItem key={item.id}  data={item} onDeleteContact={onDeleteContact}/>))}      
    </ul>
)
}

ContactList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired, name: PropTypes.string.isRequired, number: PropTypes.string.isRequired, })),
    filterResult: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired, name: PropTypes.string.isRequired, number: PropTypes.string.isRequired, }),),
    onDeleteContact: PropTypes.func.isRequired,
}