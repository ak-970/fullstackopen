const NumberListItem = ({ person, handleDelete }) => 
    <li key={person.id}>
        {person.name} {person.number} <button onClick={handleDelete}>delete</button>
    </li>

export default NumberListItem