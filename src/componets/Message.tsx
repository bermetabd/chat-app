import React from 'react';
import {resultProps} from "../models";
interface Props {
  message: resultProps,
  index: number
}

const Message = ({message, index}: Props) => {
  return (
    <div className='border-emerald-500 border-1 rounded px-2 py-2.5 my-1'>
      <span className='text-[12px] text-emerald-900 mr-2'>{index+1}</span>
      <span className='text-[12px]  border-emerald-600'>
        {message.user && message.user.firstName} {message.user && message.user.lastName} said at {message.datetime.slice(0, 19).replace(/-/g, "-").replace("T", " ")}:
      </span>
      <p className='text-xl mt-2'>{message.message}</p>
    </div>
  );
};

export default Message;