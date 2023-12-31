const Header = (props) => {
    return <h1>{props.name}</h1>
};

const Part = (props) => {
    return <p>{props.name} {props.exercises}</p>
};

const Content = (props) => {
    return (
        <>
            {props.parts.map(p =>
                <Part key={p.name} name={p.name} exercises={p.exercises}/>
            )}
        </>
    );
};

const Total = (props) => {
    return <p>Number of exercises {props.parts.reduce( (a, b) => a + b.exercises, 0 )}</p>
};

const App = () => {

    const course = {
        name : 'Half Stack application development',
        parts : [
            {
                name : 'Fundamentals of React',
                exercises : 10
            },
            {
                name : 'Using props to pass data',
                exercises : 7
            },
            {
                name : 'State of a component',
                exercises : 14
            }
        ]
    };

    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    );
};

export default App