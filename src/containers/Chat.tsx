import React from 'react';
import {useMessages} from "../data/messages";
import Message from "../componets/Message";
import Button from "../componets/Button";
import {resultProps} from "../models";


const Chat = () => {
  const {messages, submitHandler, value, changeHandler, error} = useMessages();

  return (
    <div className='container mx-auto px-5 py-8 bg-amber-50'>
      {error && <p>{error}</p>}
      <form className='flex w-full'onSubmit={submitHandler}>
        <textarea
          rows={2}
          className='w-full px-2 py-2 border-2 border-emerald-600'
          name='message'
          value={value.message}
          onChange={changeHandler}
        />
        <Button text='Send' type='submit' addStyle={'pl-4 ml-3'}/>
      </form>
      {messages.map((message:resultProps, index:number) => <Message message={message} key={message._id} index={index}/>)}
    </div>
  );
};

export default Chat;