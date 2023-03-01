import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°C`;
}

const minDistance = 1;

var rounded = function (number) {
  return +number.toFixed(2);
};

export default function MinimumDistanceSlider() {
  const inputRef1 = React.useRef();
  const [calculatedValue, setCalculatedValue] = React.useState([]);
  const [value1, setValue1] = React.useState([0, 100]);

  const handleChange1 = (event, newValue, activeThumb) => {
    console.log(value1);
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  return (
    <div>
      <Slider
        sx={{
          width: 246,
          color: '#3772FF',
        }}
        aria-valuetext={null}
        step={0.1}
        scale={(value) => value}
        getAriaLabel={() => 'Minimum distance'}
        value={value1}
        onChange={handleChange1}
        getAriaValueText={valuetext}
        disableSwap
      />
      <div className="flex mt-4  justify-between mx-[-10px]">
        <p>
          <input
            ref={inputRef1}
            value={value1[0]}
            onChange={(e) => setValue1([e.target.value, value1[1]])}
            className="w-8 mr-2 focus:outline-primary focus:outline-2 outline-gray outline rounded-sm "
          />
          ETH
        </p>
        <p>{rounded(value1[1] / 1)} ETH</p>
      </div>
    </div>
  );
}
