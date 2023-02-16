import {useEffect, useState} from "react";
import {IAuthor} from "../models";
import axiosApi from "../axiosApi";
import {AxiosError} from "axios/index";

export const useSubscribe = () => {
  const [modalSubscribe, setModalSubscribe] = useState(false);
  const [error, setError] = useState('');
  const [subscribes, setSubscribes] = useState<IAuthor[]>([]);

  const fetchSubscribes = async() => {
    try {
      const response = await axiosApi.get<IAuthor[]>('/subscribe');
      setSubscribes(response.data);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setError(error.message);
    }
  };
  useEffect(() => {
    fetchSubscribes();
  }, []);

  return {setModalSubscribe, modalSubscribe, subscribes, error}
}