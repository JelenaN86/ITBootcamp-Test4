import {useState, useEffect} from 'react'
import { getRocketById } from '../services'
const Launch = ({launch}) =>{
    const [info, setInfo] = useState([])

    useEffect(() =>{
        getRocketById().then(res=>{
            setInfo(res.data)
        })
    },[])
    
    return(
        <div>
            <img src={launch.links.patch.small} alt={`${launch.name} s image`} width="150px"/>
            <p>{launch.name}</p>
            <p>{launch.static_fire_date_unix}</p>
            <details>
                <summary>Additional informations</summary>
                <p>{launch.id}</p>
                <p>{launch.active}</p>
            </details>
        </div>
    )
}
export default Launch