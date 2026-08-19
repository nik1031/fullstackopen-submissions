const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return(
  <p>
    {props.chapters.part} {props.chapters.exercises}
  </p>
  )
}


const Content = (props) => {
  return (
    <div>
      <Part chapters = {props.chapters[0]}/>
      <Part chapters = {props.chapters[1]}/>
      <Part chapters = {props.chapters[2]}/>
    </div>
  )
}

const Total = (props) => {
  return(
    <p>Number of exercises {props.count}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'

  const chapters = [
    {part : 'Fundamentals of React', exercises : 10},
    {part : 'Using props to pass data', exercises : 7},
    {part : 'State of a component', exercises : 14}
  ]

  return (
    <div>
      <Header course={course} />
      <Content chapters = {chapters}/>
      <Total count={chapters[0].exercises + chapters[1].exercises + chapters[2].exercises} />
    </div>
  )
}

export default App