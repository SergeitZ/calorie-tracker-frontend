import React from 'react';
import BorderCard from '../common/BorderCard';


const Athlete = (props) => {
  const {name, id} = props.athlete

  // const onSelect = () => {
  //   props.onSelect(id)
  // }

  return (
    <BorderCard onClick={() => props.onSelect(id)}>
      <h2>{name}</h2>
    </BorderCard>
  )
}

export default Athlete;