import React from 'react';

function SeekBar({ value, min, max, onInput}){
  // converts the time to format 0:00
  const getTime = (time) => `${Math.floor(time / 60)}:${(`0${Math.floor(time % 60)}`).slice(-2)}`;
  return (
    <div className="mx-[2rem] flex text-[13px] items-center">
        <span className="text-[#f50] mr-[10px]">{value === 0 ? '0:00' : getTime(value)}</span>
        <input
            type="range"
            step="any"
            value={value}
            min={min}
            max={max}
            onInput={() => onInput}
            className="w-24 h-1 mx-4 rounded-lg md:block md:w-56 2xl:w-96 2xl:mx-6"
        />
        <span className="ml-[10px]">{max === 0 ? '0:00' : getTime(max)}</span>
    </div>
  );
};

export default SeekBar;
