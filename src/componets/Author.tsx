import React from 'react';
import {IAuthor} from "../models";

interface AuthorProps {
  author: IAuthor
}

const Author = ({author}: AuthorProps) => {
  return (
    <div className='md:text-3xl text-emerald-800 text-2xl'>
      {author.firstName + '  ' + author.lastName}
    </div>
  );
};

export default Author;