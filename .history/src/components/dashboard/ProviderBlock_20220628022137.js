import React from 'react';
import { auth } from '../../misc/firebase';

const ProviderBlock = () => {
  console.log(auth.currentUser());
  return <div>hello</div>;
};

export default ProviderBlock;
