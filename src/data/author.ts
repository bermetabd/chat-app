import {useEffect, useState} from "react";
import {IAuthor, NewAuthor} from "../models";
import axiosApi from "../axiosApi";
import {AxiosError} from "axios/index";


export const useAuthor = () => {
  const [author, setAuthor] = useState<IAuthor>({
    _id: '',
    email: '',
    firstName: '',
    lastName: '',
    subscriptions: []
  });

  const [modal, setModal] = useState(false);

  const editAuthorName = (author:NewAuthor) => {
    setAuthor(prev => ({...prev, firstName: author.firstName, lastName: author.lastName}))
  }

  const editHandler = (author: NewAuthor) => {
    setModal(false);
    editAuthorName(author);
  }


  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getAuthor = async () => {
    try{
      setError('');
      setLoading(true);
      const response = await axiosApi('/profile');
      const authorName: IAuthor = response.data;
      setAuthor(authorName);
      setLoading(false);
    } catch(e: unknown){
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message);
    }
  };
  useEffect(() => {
    getAuthor();
  }, []);


  return {author, loading, error, editAuthorName, editHandler, modal, setModal};
};

