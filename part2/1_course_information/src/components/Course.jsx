import Header from './Header'
import Content from './Content'

const Course = ({ course }) => {

    console.log('Course...');

    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
        </div>
    )
}

export default Course