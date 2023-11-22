//import { useState } from 'react'
 import { Header } from './components/Header'
 import DateCalendarValue  from './components/DateCalendarValue'
 import './scss/header.scss'
 import './scss/app.scss'

function App() {
 // const [count, setCount] = useState(0)

  return (
    <div >
      <Header />
      <div className='main-layout'>
       <div className='main-layout-box'>
        <DateCalendarValue/>
       </div>
      <div className='main-layout-box1'>
        <h2 className='main-layout-box1-text'>Tasks</h2>
      </div>
      <div className='main-layout-box2'>
        <h2 className='main-layout-box2-text'>Add a task</h2>
   
      </div>
      </div>
    </div>
  )
}

export default App
