import React from 'react';
import { InputGroup, Icon } from 'rsuite';
import { ReactMic } from 'react-mic';

const AudioMsgBtn = ({ afterUpload }) => {
  return (
    <InputGroup.Button onClick={onClick}>
      <Icon icon="microphone" />
      <ReactMic
        record={this.state.record}
        className="sound-wave"
        onStop={this.onStop}
        onData={this.onData}
        strokeColor="#000000"
        backgroundColor="#FF4081"
      />
    </InputGroup.Button>
  );
};

export default AudioMsgBtn;
