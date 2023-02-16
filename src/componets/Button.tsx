import React from 'react';

interface ButtonProps {
  text: string,
  addStyle: string,
  type?: 'submit' | 'reset' | 'button' | undefined;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void,
}

const Button = ({text, addStyle, type, onClick}: ButtonProps) => {
  return (
    <button type={type} onClick={onClick} className={`py-2 pr-4 pl-8 border-2 rounded bg-emerald-800 text-white uppercase hover:bg-emerald-600 bg-no-repeat text-[12px] bg-left ${addStyle}`}>
      {text}
    </button>
  );
};

export default Button;