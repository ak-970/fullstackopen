const Header = (props) => {
    return (
        <h1>{props.name}</h1>
    );
};

const Content = (props) => {
    return (
        <p>{props.name} {props.exercises}</p>
    );
};

const Total = (props) => {
    return (
        <p>
            Number of exercises {props.total}
        </p>
    );
};

const App = () => {

    const course = {
        name : 'Half Stack application development',
        parts : [
            {
                key : 'Fundamentals of React',
                exercises : 10
            },
            {
                key : 'Using props to pass data',
                exercises : 7
            },
            {
                key : 'State of a component',
                exercises : 14
            }
        ]
    };

    return (
        <div>
            <Header name={course.name} />

            {course.parts.map(p => (
                <Content key={p.key} name={p.key} exercises={p.exercises}/>
            ))}

            <Total total={course.parts.reduce( (a, b) => a + b.exercises, 0 )} />
        </div>
    );
};

export default App