const AddNumber = ({ handleSubmit, newName, handleNameChange, newNumber, handleNumberChange }) => 
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor='name'>name: </label>
            <input
                id='name'
                value={newName}
                onChange={handleNameChange}
            />
        </div>
        <div>
            <label htmlFor='number'>number: </label>
            <input
                id='number'
                value={newNumber}
                onChange={handleNumberChange}
            />
        </div>
        <div>
            <button type="submit">add</button>
        </div>
    </form>
    
export default AddNumber