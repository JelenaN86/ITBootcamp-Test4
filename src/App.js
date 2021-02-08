import {useState, useEffect} from 'react'
import Launches from './components/Launches'
import Select from './components/Select'
import { getAllLaunches } from './services'

const App = () =>{
    const [launches,setLaunches] = useState([])
    const [selectValue,setSelectValue] = useState('')
    const [numberLaunches,setNumberLaunches] = useState([])

    useEffect(() =>{
      getAllLaunches().then(res=>{
        setLaunches(res.data)
      })
    },[])
  return(
    <>
      <Select options={numberLaunches} onChange={e => setNumberLaunches(e.target.value)}/>
      <Launches launches={launches.filter(launch => launches.length === 10 ? launch(selectValue))}/>
    </>
  )
}
export default App
