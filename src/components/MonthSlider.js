import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 0,
    label: 'Jan',
  },
  {
    value: 10,
    label: 'Feb',
  },
  {
    value: 20,
    label: 'Mar',
  },
  {
    value: 30,
    label: 'Apr',
  },
  {
    value: 40,
    label: 'May',
  },
  {
    value: 50,
    label: 'Jun',
  },
  {
    value: 60,
    label: 'Jul',
  },
  {
    value: 70,
    label: 'Aug',
  },
  {
    value: 80,
    label: 'Sep',
  },
  {
    value: 90,
    label: 'Oct',
  },
  {
    value: 100,
    label: 'Nov',
  },
  {
    value: 110,
    label: 'Dec',
  },
];

function valuetext(value) {
  return `${value}°C`;
}

export default function MonthSlider() {
  return (
    <Box sx={{ml:'80px', mt: '25px', height: '400px'}}>
      <Slider
        aria-label="Month"
        defaultValue={0}
        getAriaValueText={valuetext}
        step={10}
        // valueLabelDisplay="auto"
        marks={marks}
        max={110}
        sx={{
            '& input[type="range"]': {
              WebkitAppearance: 'slider-vertical',
            },
          }}
          orientation="vertical"
      />
    </Box>
  );
}