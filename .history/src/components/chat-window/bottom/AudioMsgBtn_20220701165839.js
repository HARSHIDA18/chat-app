import React, { useCallback, useState } from 'react';
import { InputGroup, Icon } from 'rsuite';
import { ReactMic } from 'react-mic';
import { storage } from '../../../misc/firebase';

const AudioMsgBtn = ({ afterUpload }) => {
  const [isRecording, setIsRecording] = useState(false);
  const onClick =
    (() => {
      setIsRecording(p => !p);
    },
    []);
  const onUpload = useCallback(() => {
    try{
        storage
           .ref(`/chat/${chatId}`)
           .child(Data.now()+f.name)
           .put(f.blobFile)
           cacheControl:`public,max-age-$(3600*24*3)`,

    }catch(err){

    }
  }, []);
  return (
    <InputGroup.Button onClick={onClick}>
      <Icon icon="microphone" />
      <ReactMic
        record={isRecording}
        className="d-none"
        onStop={onUpload}
        mimeType="audio/mp3"
      />
    </InputGroup.Button>
  );
};

export default AudioMsgBtn;
