import React, { useModalState } from 'react';
import { Button } from 'rsuite';

const ProfileInfoBtnModal = ({ profile }) => {
  const { isOpen, close, open } = useModalState();
  const shortName = profile.name.split('')[0];

  return (
    <div>
      <Button>{shortName}</Button>
    </div>
  );
};

export default ProfileInfoBtnModal;
