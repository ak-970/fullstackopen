import { useState } from 'react'


const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>


const StatisticLine = (props) => <tr><td>{props.text}</td><td>{props.value}</td></tr>


const Statistics = ( {feedback} ) => {

    const countFeedback = (value) => feedback.filter(i => i === value).length

    return 0 === feedback.length ? <p>No feedback given</p> :
        <table>
            <tbody>
                <StatisticLine text="good" value={countFeedback(1)} />
                <StatisticLine text="neutral" value={countFeedback(0)} />
                <StatisticLine text="bad" value={countFeedback(-1)} />
                <StatisticLine text="all" value={feedback.length} />
                <StatisticLine text="average" value={(countFeedback(1) - countFeedback(-1)) / feedback.length} />
                <StatisticLine text="positive" value={`${100 * countFeedback(1) / feedback.length} %`} />
            </tbody>
        </table>
}


const App = () => {

    const [allFeedback, setAllFeedback] = useState([])
  
    const handleFeedback = (feedback) => () => setAllFeedback(allFeedback.concat(feedback))

    return (
        <div>
            <h1>unicafe</h1>

            <h2>give feedback</h2>
            <Button handleClick={ handleFeedback(1) } text="good" />
            <Button handleClick={ handleFeedback(0) } text="neutral" />
            <Button handleClick={ handleFeedback(-1) } text="bad" />

            <h2>statistics</h2>
            <Statistics feedback={allFeedback}/>
        </div>
    )
}


export default App