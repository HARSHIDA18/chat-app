import React, { useState } from 'react';
import { Tag, Icon, Button, Alert } from 'rsuite';
import { auth } from '../../misc/firebase';

const ProviderBlock = () => {
  const [isConnected, setIsConnected] = useState({
    'google.com': auth.currentUser.providerData.some(
      data => data.providerId === 'google.com'
    ),
    'facebook.com': auth.currentUser.providerData.some(
      data => data.providerId === 'facebook.com'
    ),
  });

  const updateIsConnected = (providerId, value) => {
    setIsConnected(p => {
      return {
        ...p,
        [providerId]: value,
      };
    });
  };

  const unlink = async providerId => {
    try {
      if (auth.currentUser.providerData.length === 1) {
        throw new Error('You can not disconnect from provider id');
      }
      await auth.currentUser.unlink(providerId);
      updateIsConnected(providerId, false);
    } catch (err) {
      Alert.error(err.message, 4000);
    }
  };

  const unlinkFacebook = () => {
    unlink('facebook.com');
  };
  const unlinkGoogle = () => {
    unlink('google.com');
  };

  const linkFacebook = () => {};
  const linkGoogle = () => {};
  return (
    <div>
      {isConnected['google.com'] && (
        <Tag color="green" closable>
          <Icon icon="google" />
          Connected
        </Tag>
      )}
      {isConnected['facebook.com'] && (
        <Tag color="blue" closable>
          <Icon icon="facebook" />
          Connected
        </Tag>
      )}

      <div className="mt-2">
        {!isConnected['google.com'] && (
          <Button block color="green">
            <Icon icon="google" />
            Link To Google
          </Button>
        )}

        {!isConnected['facebook.com.com'] && (
          <Button block color="blue">
            <Icon icon="facebook" />
            Link To Facebook
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProviderBlock;
