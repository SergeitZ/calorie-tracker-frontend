import React, {useState, useEffect, useContext, Fragment} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom'
import {AuthContext} from '../Providers/AuthProvider'
import Spinner from '../faCommon/Spinner';
import image from '../../assets/RegSplash.jpg';
import Button from '../common/Button';
import {faUserPlus, faUserSlash, faUserInjured, faUserClock, faPeopleArrows} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import lorem from '../../assets/loremIpsum';


const Profile = (props) => {
  const params = useParams();
  const [athlete, setAthlete] = useState({
    id: params.athId
  });
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useContext(AuthContext);
  const host = process.env.REACT_APP_API_HOST || "http://localhost:8080";
  // pull athlete data from backend
  useEffect(() => {
    const _fetchAthlete = async () => {
      const res = await axios.get(
        `${host}/athletes/${athlete.id}`,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`
          } 
        }
      )
      console.log(res.data);
      setAthlete(res.data);
      setLoading(false);
    }
    setLoading(true);
    _fetchAthlete();
  }, [])

  /*
    display a header with avatar and name.
    display about me and if friends then display friends list on right.
  */

  console.log(auth);

  const displayProfile = () => {
    return (
      <Fragment>
        {/* Profile banner */}
        <div style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          height: '27vh',
          display: 'flex',
          flexDirection: 'row',
          margin: '1rem 0rem',
          padding: '8px',
          maxWidth: '900px',
          width: '100%'
        }}>
          <div style={{
            flex: 1,
            flexDirection: 'column',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <img src="https://via.placeholder.com/200" />
          </div>
          <div style={{
            flex: 2,
            flexDirection: 'column',
            color: '#F1F1F1',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <h1>{athlete.name.toUpperCase()}</h1>
          </div>
        </div>
        {/* relationship buttons */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          width: '100%',
          maxWidth: '900px'
        }}>
          {/* {displayRelationButton()} */}
          <Button style={{
            width: 'auto',
            color: '#F1F1F1',
            backgroundColor: 'red'
          }}>
            Block <FontAwesomeIcon icon={faUserSlash} />
          </Button> 
        </div>
        {/* about me and friends list */}
        <div style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          maxWidth: "900px",
        }}>
          <div style={{
            flex: 2,
            flexDirection: "column",
            width: '100%',
            padding: '4px',
            display: 'flex'
          }}>
            <h2>About Me</h2>
            <p>{lorem.substring(0, 5000)}</p>
          </div>
          <div style={{
            flex: 1,
            display: 'flex', 
            flexDirection: 'column',
            width: '100%',
            padding: '4px'
          }}>
            <h2>Friends</h2>
            <p>You are alone in the world</p>
          </div>
        </div>
      </Fragment>
    )
  }

  return (
    <div style={{
      display: "flex",
      flex: "1",
      flexDirection: "column",
      alignItems: 'center',
      minHeight: '100vh',
    }}>
      {loading ? (
        <Fragment />
      ) : 
        displayProfile()
      }
    </div>
  )
}

export default Profile;