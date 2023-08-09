const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = ({ props }) => {
  return (
    <>
      <p>{props[0].name} {props[0].exercises}</p>
      <p>{props[1].name} {props[1].exercises}</p>
      <p>{props[2].name} {props[2].exercises}</p>
    </>
  )
}

const Total = ({ props }) => {
  return (
    <div>
      <p>
        Number of exercises: {props[0].exercise + props[1].exercise + props[2].exercise}
      </p>
    </div>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content props={course.parts} />
      <Total props={course.parts} />
    </div>
  )
}

export default App