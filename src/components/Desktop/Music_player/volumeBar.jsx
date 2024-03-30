import React from 'react';
import VolumeUpLogo from '../../Logos_and_icons/volumeUpLogo';
import VolumeDownLogo from '../../Logos_and_icons/volumeDownLogo';
import VolumeMuteLogo from '../../Logos_and_icons/volumeMuteLogo';

const VolumeBar = ({ value, min, max, onChange, setVolume }) => (
  <div className="items-center justify-end flex-1 hidden lg:flex cursor-pointer">
    {value <= 1 && value > 0.5 && 
        <div onClick={() => setVolume(0)}>
            <VolumeUpLogo color={"#000000"} />
        </div> 
    }
    {value <= 0.5 && value > 0 && 
        <div onClick={() => setVolume(0)}>
            <VolumeDownLogo color={"#000000"} />
        </div>
    }
    {value == 0 && 
        <div onClick={() => setVolume(1)}>
            <VolumeMuteLogo color={"#000000"} />
        </div>
    }
    <input
      type="range"
      step="any"
      value={value}
      min={min}
      max={max}
      onChange={onChange}
      className="h-1 ml-2 2xl:w-40 lg:w-32 md:w-32"
    />
  </div>
);

export default VolumeBar;
