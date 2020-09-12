import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <h2>{props.course}</h2>
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
  // console.log(parts[0]);
  // console.log(parts[0].name);
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

const Total = ({parts}) => {
  // console.log(parts)

  const total = parts.reduce((sum, single_part) => {
    console.log('what is happening', sum, single_part)
    return sum + single_part.exercises
  }, 0)

  return (
    <p>
      Number of exercises {total}
    </p>
  )
}

const Course = ({single_course}) => {
  return (
    <div>
    <Header course={single_course.name} />
    <Content parts={single_course.parts} />
    <Total parts={single_course.parts} />
    </div>
  )

}

const Courses =  ({multiple_courses}) => {
  // Put components between enclosing tags <div>....</div> 
  // https://stackoverflow.com/questions/31284169/parse-error-adjacent-jsx-elements-must-be-wrapped-in-an-enclosing-tag
  return (
    <div>  
      <h1>Welcome to Pua's React workshop!</h1>
    
      {multiple_courses.map((item) =>
        <div key={item.id}>
          {/* Add keys using id of each "item" */}
          <Course single_course={item} />
        </div>
        
      )}
    </div>
  )


}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  return <Courses multiple_courses={courses} />
}

ReactDOM.render(<App />, document.getElementById('root'))