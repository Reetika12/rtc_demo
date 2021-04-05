import React, { useEffect } from 'react';
import VideocamIcon from '@material-ui/icons/Videocam';
import VideocamOffIcon from '@material-ui/icons/VideocamOff';
import MicIcon from '@material-ui/icons/Mic';
import MicOffIcon from '@material-ui/icons/MicOff';
import SpeakerIcon from '@material-ui/icons/Speaker';
import speakingIcon from './../images/sound.gif';

const RemoteStream = (props) => {
  const { id, stream, onAVChange, isTute = false, speaking = false, tuteControls = {} } = props;
  const { audioState, videoState } = stream;

  return (
    <div className="remoteStreamItem">
      <div className={speaking ? "remoteStream speaking" : "remoteStream"} id={id}>
        {speaking && <div className="speakerIcon"><img className="sicon" src={speakingIcon} alt="" /></div>}
        <div className="rmtControls">
          <div className="controlIcon" >{videoState ? <VideocamIcon fontSize="small" /> : <VideocamOffIcon fontSize="small" />}</div>
          <div className="controlIcon">{id}</div>
          <div className="controlIcon" >{audioState ? <MicIcon fontSize="small" /> : <MicOffIcon fontSize="small" />}</div>
        </div>
      </div>

      {isTute && <div className="tuteControls">
        <button className="controlIcon" onClick={() => onAVChange(id, 'video', tuteControls.video)} >{tuteControls.video ? "Mute Video" : "Unmute Video"}</button>
        <button className="controlIcon" onClick={() => onAVChange(id, 'audio', tuteControls.audio)}>{tuteControls.audio ? "Mute Audio" : "Unmute Audio"}</button>
      </div>}
    </div>
  );
};

export default RemoteStream;