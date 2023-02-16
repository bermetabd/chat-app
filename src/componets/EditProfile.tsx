import React, {ChangeEvent, useState} from 'react';
import {NewAuthor} from "../models";
import axiosApi from "../axiosApi";
import Error from "./Error";

interface EditAuthorProps {
  onEdit: (author: NewAuthor) => void
}
const EditProfile = ({onEdit}: EditAuthorProps) => {
  const [newValue, setValue] = useState<NewAuthor>({
    firstName: "",
    lastName: ""
  });
  
  const [error, setError] = useState('');

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');

    if (newValue.firstName.trim().length === 0 || newValue.lastName.trim().length === 0) {
      setError('Please enter all data');
      return;
    }
    const body = new URLSearchParams();
    body.append('firstName', newValue.firstName);
    body.append('lastName', newValue.lastName);
    const response = await axiosApi.post<NewAuthor>('/profile', body);
    onEdit(response.data);
  };
    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      setValue({
        ...newValue,
        [event.target.name]: event.target.value
      });
    }


  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        className='border py-2 px-4 mb-2 w-full'
        placeholder='Enter first name'
        name='firstName'
        value={newValue.firstName}
        onChange={changeHandler}
      />
      <input
        type="text"
        className='border py-2 px-4 mb-4 w-full'
        placeholder='Enter last name'
        name='lastName'
        value={newValue.lastName}
        onChange={changeHandler}
      />

      {error && <Error error={error}/>}

      <div className='text-right'>
        <button type='submit' className='py-2 px-4 border-2 rounded bg-emerald-800 text-white uppercase hover:bg-emerald-600'>save</button>
      </div>
      
    </form>
  );
};

export default EditProfile;