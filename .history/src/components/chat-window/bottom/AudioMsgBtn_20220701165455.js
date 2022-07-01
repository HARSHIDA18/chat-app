import React, { useCallback, useState } from 'react';
import { InputGroup, Icon } from 'rsuite';
import { ReactMic } from 'react-mic';

const AudioMsgBtn = ({ afterUpload }) => {
  const [isRecording, setIsRecording] = useState(false);
  const onUpload = useCallback(() => {}, []);
  return (
    <InputGroup.Button onClick={onClick}>
      <Icon icon="microphone" />
      <ReactMic record={isRecording} className="d-none" onStop={onUpload} />
    </InputGroup.Button>
  );
};

export default AudioMsgBtn;
