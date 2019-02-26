import React from 'react';
import VolumenIcon from '../../icons/components/volume';
import Mute from '../../icons/components/mute';
import './volume.css';

function Volume(props) {
  return (
    <button
      className="Volume"
    >
      <div onClick={props.handleVolumeToggle}>
        {
          props.volume ?
            <VolumenIcon
              color="white"
              size={25}
            />
          :
            <Mute
              color="white"
              size={25}
            />
        }
      </div>
      <div className="Volume-range">
        <input
          type="range"
          min={0}
          max={1}
          step={.05}
          onChange={props.handleVolumeChange}
        />
      </div>
    </button>
  )
}

export default Volume;
