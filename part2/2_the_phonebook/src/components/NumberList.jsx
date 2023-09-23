import NumberListItem from "./NumberListItem"

const NumberList = ({ persons, handleDelete }) =>
    <ul>
        {persons.map(person =>
            <NumberListItem
                key={person.id}
                person={person}
                handleDelete={() => handleDelete(person.id)}
            />
        )}
    </ul>


export default NumberList