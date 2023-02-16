import React, {ChangeEvent, useState} from 'react';
import {IEmail} from "../models";
import axiosApi from "../axiosApi";
import {AxiosError} from "axios/index";
import Error from "./Error";


interface AddSubscribeProps {
  onAdd: () => void
}

const FollowUser = ({onAdd}: AddSubscribeProps) => {
  const [value, setValue] = useState<IEmail>({
    email: "",
  });
  const [error, setError] = useState('');

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');


    if (value.email.trim().length === 0) {
      setError('Please enter all data');
      return;
    }

    try {
      const body = new URLSearchParams();
      body.append('email', value.email);
      await axiosApi.post<IEmail>('/subscribe', body);
      onAdd();
      setValue(prev => ({...prev, email: ''}));
    } catch (e: unknown) {
      const error = e as AxiosError;
      setError(error.message);
    }
  };

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue({
      ...value,
      [event.target.name]: event.target.value
    });
  }

  return (
    <form  onSubmit={submitHandler}>
      <input
        type='text'
        className='border py-2 px-4 mb-2 w-full'
        placeholder='Enter email'
        name='email'
        value={value.email}
        onChange={changeHandler}
      />
      {error && <Error error={error}/>}

      <div className='text-right'>
        <button type='submit' className='py-2 px-4 border-2 rounded bg-emerald-800 text-white uppercase hover:bg-emerald-600'>add</button>
      </div>
    </form>
  );
};

export default FollowUser;