const NumberListItem = ({ person, handleDelete }) => 
    <li className="person">
        {person.name} {person.number} <button onClick={handleDelete}>delete</button>
    </li>

export default NumberListItem