import React, { useCallback, useState } from 'react';
import { InputGroup, Icon } from 'rsuite';
import { ReactMic } from 'react-mic';
import { storage } from '../../../misc/firebase';
import { useParams } from 'react-router';

const AudioMsgBtn = ({ afterUpload }) => {
    const { chatId }=useParams()
  const [isRecording, setIsRecording] = useState(false);
  const onClick =
    (() => {
      setIsRecording(p => !p);
    },
    []);
  const onUpload = useCallback(async () => {
    try{
        const snap= await storage
           .ref(`/chat/${chatId}`)
           .child(`audio_${Date.now()}.mp3`)
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
