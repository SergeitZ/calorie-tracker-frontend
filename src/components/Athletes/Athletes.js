import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../Providers/AuthProvider';
import Spinner from '../faCommon/Spinner';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import Athlete from './Athlete';

const Athletes = (props) => {
  const [auth] = useContext(AuthContext)
  const [athletes, setAthletes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // use effect to pull list of athletes
  // use state to store the athletes
  // need bearer token to get the athlete list.

  useEffect(() => {
    const host = process.env.REACT_APP_API_HOST || "http://localhost:8080";
    const _getAthletes = async () => {
      try {
        const res = await axios.get(
          `${host}/api/athletes`,
          {
            headers: {
              "Authorization": `Bearer ${auth.token}`
            }
          }
        )
        console.log(res.data)
        setLoading(false);
        setAthletes(res.data);
      } catch (err) {
        console.log(err.response.message)
      }


    }
    setLoading(true);
    _getAthletes();
  },[auth.token])

  const displayAthletes = () => {
    return athletes.map(ath => <Athlete athlete={ath} key={ath.id} onSelect={onSelect}/>)
  }

  const onSelect = (athId) => {
    navigate(`/athletes/${athId}`)
  }

  return (
    <div style={{
      display: "flex",
      flex: "1",
      flexDirection: "column",
      alignItems: 'center',
      minHeight: '100vh',
    }}>
      <h1>Athletes</h1>
      {loading ? 
        <Spinner /> 
      :
        displayAthletes()
      }
    </div>
  )
}

export default Athletes;