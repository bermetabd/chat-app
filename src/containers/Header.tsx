import React from 'react';
import Author from "../componets/Author";
import {useAuthor} from "../data/author";
import editButton from "../assets/edit.png";
import Modal from "../componets/Modal";
import EditProfile from "../componets/EditProfile";
import Button from "../componets/Button";
import {useFollow} from "../data/followUser";
import {useSubscribe} from "../data/subscribes";
import FollowUser from "../componets/FollowUser";
import Subscribes from "../componets/Subscribes";
const Header = () => {
  const {author, editHandler, modal, setModal} = useAuthor();
  const {modalFollow, setModalFollow} = useFollow();
  const {setModalSubscribe, modalSubscribe} = useSubscribe();
  return (
    <div className='sm:container mx-auto px-5 py-8 bg-emerald-50 flex justify-between'>
      <div className='flex'>
        <Author author={author}/>
      </div>
      <button className='cursor-pointer'onClick={() => setModal(true)}>
        <img src={editButton} alt="editButton" width="20px" height="20px"/>
      </button>

      <div className='flex'>
        <Button type='button' text='Follow user' addStyle='bg-newUser'  onClick={() => setModalFollow(true)}/>
        <Button type='button' text='Subscribes' addStyle='bg-subscribes' onClick={() => setModalSubscribe(true)}/>
      </div>

      {modal && <Modal title="Edit Profile" onClose={() => setModal(false)}>
        <EditProfile onEdit={editHandler}/>
      </Modal>}
      {modalFollow && <Modal title='Follow User' onClose={() => setModalFollow(false)}>
        <FollowUser onAdd={() => setModalFollow(false)}/>
      </Modal>}
      {modalSubscribe && <Modal title='Your subscribe' onClose={() => setModalSubscribe(false)}>
        <Subscribes/>
      </Modal>}
    </div>
  );
};

export default Header;