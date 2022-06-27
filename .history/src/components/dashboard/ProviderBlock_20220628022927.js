import React, { useState } from 'react';
import { Tag, Icon,Button } from 'rsuite';
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
        <Icon icon="google" />
        Connected
      </Tag>
      <Tag color="blue" closable>
        <Icon icon="facebook" />
        Connected
      </Tag>


      <div className='mt-2'>
        <Button block color="green">
            <Icon icon="google/>
        </Button>
      </div>
    </div>
  );
};

export default ProviderBlock;
