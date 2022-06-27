import React, { useState } from 'react';
import { Tag, Icon } from 'rsuite';
import { auth } from '../../misc/firebase';

const ProviderBlock = () => {
  const [isConnected, setIdConnected] = useState({
    'google.com': auth.currentUser.providerData.some(
      data => data.providerId === 'google.com'
    ),
    'facebook.com': auth.currentUser.providerData.some(
      data => data.providerId === 'facebook.com'
    ),
  });
  return (
    <div>
      <Tag color="green" closable>
        <Icon icon="google" />C
      </Tag>
    </div>
  );
};

export default ProviderBlock;
