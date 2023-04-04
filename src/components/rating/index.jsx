import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function HalfRating({star}) {
  return (
    <Stack spacing={1}>
      <Rating name="half-rating-read" defaultValue={star} precision={0.5} readOnly />
    </Stack>
  );
}