import React, { useEffect, useState } from 'react'
import Card from './components/Card'
import { getMontlyEvent, getToken } from './Api/index'
import './App.css'

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const App = () => {

  const [selectedMonth, setSelectedMonth] = useState(5)
  const [monthEvent, setMonthEvent] = useState([])
  const [selected, setSelected] = useState(null)

  
  useEffect(()=> {
    getToken()

    // eslint-disable-next-line
  }, [])

  const getEvents = async () => {
    const events = await getMontlyEvent(selectedMonth)
    setMonthEvent(events)
  }

  useEffect( ()=> {
    getEvents()

    // eslint-disable-next-line
  }, [selectedMonth])

  const showFullDescriptionHandler = (id) => {
    if(id === selected){
      setSelected(null);

    }else{
      
      setSelected(id);
    }
  };

  return (
    <div>
       <div className='select-wrapper'>
            <label className="select-tag" for="months">Choose a month:</label>
            <select 
            name="months" id="months"  onChange={(e) => setSelectedMonth(e.target.value)}>
              {months.map((month, index) => (
                <option 
                selected={index + 1  === selectedMonth}

                key={index} value={index + 1 }>{month}</option>
              ))}
            </select>
        </div>
        {monthEvent.length < 1 ? (
          <p className='empty-state'>No event happening this month!</p>
        ) : (
          <div className='card-wrapper'>
          {monthEvent.map(data => (
            <>
              <Card 
                title={data.title}
                date={data.date}
                image={data.images.desktop}
                description={data.description}
                showFullDescriptionHandler={() => showFullDescriptionHandler(data.id)}
                isselected={selected === data.id}
              />
            </>
          ))}
        </div>
        )}
    </div>
  )
}

export default App