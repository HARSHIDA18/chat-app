import React, { useState } from 'react';
import { auth } from '../../misc/firebase';

const ProviderBlock = () => {
  const [isConnected, setIdConnected] = useState({
    'google.com': auth.currentUser.providerData.some(
      data => data.providerId === 'google.com'
    ),
  });
  return <div>hello</div>;
};

export default ProviderBlock;
