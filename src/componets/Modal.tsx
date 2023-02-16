import React from 'react';

interface ModalProps {
  children: React.ReactNode,
  title: string,
  onClose: () => void
}


const Modal = ({children, title, onClose}: ModalProps) => {
  return (
    <>
      <div className='fixed bg-black/50 top-0 right-0 left-0 bottom-0' onClick={onClose}/>
      <div
        className='w-[400px] p-5 rounded bg-white absolute top-10 left-1/2 -translate-x-1/2'
      >
        <h2 className='text-xl mb-2'>{title}</h2>
        {children}
      </div>
    </>
  );
};

export default Modal;