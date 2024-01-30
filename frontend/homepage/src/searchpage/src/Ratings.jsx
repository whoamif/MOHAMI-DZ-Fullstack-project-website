import React, { useState } from 'react';
import { Typography, Rating } from '@mui/material';

const Ratings = () => {
  const [value, setValue] = useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={handleChange}
      />

      <Typography component="legend">Read only</Typography>
      <Rating name="read-only" value={value} readOnly />

      <Typography component="legend">Disabled</Typography>
      <Rating name="disabled" value={value} disabled />

      <Typography component="legend">No rating given</Typography>
      <Rating name="no-value" value={null} />
    </div>
  );
};

export default Ratings;
