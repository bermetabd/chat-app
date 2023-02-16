import React from 'react';
import {useSubscribe} from "../data/subscribes";

const Subscribes = () => {
  const {subscribes} = useSubscribe();
  return (
    <div>
      {subscribes.length > 0
        ? subscribes.map(el => <p>{el.firstName} {el.lastName} ({el.email})</p>)
        : <p>no subscriptions</p>
      }
    </div>
  );
};

export default Subscribes;