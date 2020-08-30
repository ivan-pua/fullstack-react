import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <p>
    {props.part} {props.ex}
    </p>
  )
}

const Content = (props) => {
  let parts = props.parts
  console.log(parts[0]);
  console.log(parts[0].name);
  return (
    <div>
      
      {parts.map((item) =>
        <div key={item.id}>
          {/* Add keys using id of each "item" */}
          <Part part={item.name} ex={item.exercises} />
        </div>
        
      )}
      {/* Replaces this section
      <Part part={parts[0].name} ex={props.parts[0].exercises} />
      <Part part={parts[1].name} ex={props.parts[1].exercises} />
      <Part part={parts[2].name} ex={props.parts[2].exercises} /> */}
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
    </p>
  )
}

const Course = ({singleCourse}) => {
  return (
    <div>
    <Header course={singleCourse.name} />
    <Content parts={singleCourse.parts} />
    <Total parts={singleCourse.parts} />
    </div>
  )

}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course singleCourse={course} />
}

ReactDOM.render(<App />, document.getElementById('root'))