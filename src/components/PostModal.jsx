import React from 'react';
import { Redirect, useHistory, useParams } from 'react-router-dom';

import { getPostAPI } from '../api';
import useRequest from '../hooks/useRequest';
import Modal from './Modal';
import Post from './Post';

const PostModal = () => {
   const { _id } = useParams();
   const { data, isLoading, error } = useRequest(getPostAPI, _id);

   const history = useHistory();

   const onOutsideClick = (e) => {
      e.stopPropagation();
      history.goBack();
   };

   if (error) {
      return <Redirect to='/' />;
   }

   return (
      <Modal onOutsideClick={onOutsideClick}>
         <Post {...data} isLoading={isLoading} />
      </Modal>
   );
};

export default PostModal;
