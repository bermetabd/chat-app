import {useState} from "react";

export const useFollow = () => {
  const [modalFollow, setModalFollow] = useState(false);


  return {setModalFollow, modalFollow}
}