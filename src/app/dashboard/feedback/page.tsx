'use client';

import { useState } from 'react';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  Switch,
  TextField,
  Typography,
} from '@mui/material';

type Feedback = {
  rating: number;
  comments: string;
  followUp: boolean;
};

export default function FeedbackPage() {
  const [feedback, setFeedback] = useState<Feedback>({
    rating: 0,
    comments: '',
    followUp: false,
  });

  const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFeedback({ ...feedback, rating: Number(e.target.value) });
  };

  const handleCommentsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFeedback({ ...feedback, comments: e.target.value });
  };

  const handleFollowUpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFeedback({ ...feedback, followUp: e.target.checked });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(feedback);
    // Logic to send feedback to backend
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          mt: 5,
          p: 4,
          backgroundColor: 'white',
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <Typography variant="h4" gutterBottom align="center">
          Give Us Your Feedback
        </Typography>

        <form onSubmit={handleSubmit}>
          {/* Rating Section */}
          <FormControl component="fieldset" sx={{ mb: 4 }}>
            <FormLabel component="legend">What do you think of the editing tool?</FormLabel>
            <RadioGroup row value={feedback.rating} onChange={handleRatingChange}>
              <FormControlLabel value={1} control={<Radio />} label="😞 Poor" />
              <FormControlLabel value={2} control={<Radio />} label="😕 Average" />
              <FormControlLabel value={3} control={<Radio />} label="🙂 Good" />
              <FormControlLabel value={4} control={<Radio />} label="😀 Excellent" />
            </RadioGroup>
          </FormControl>

          {/* Comments Section */}
          <FormControl fullWidth sx={{ mb: 4 }}>
            <TextField
              label="Do you have any thoughts you'd like to share?"
              multiline
              rows={4}
              variant="outlined"
              value={feedback.comments}
              onChange={handleCommentsChange}
            />
          </FormControl>

          {/* Follow-up Section */}
          <FormControl component="fieldset" sx={{ mb: 4 }}>
            <FormLabel component="legend">May we follow up on your feedback?</FormLabel>
            <FormGroup row>
              <FormControlLabel
                control={<Switch checked={feedback.followUp} onChange={handleFollowUpChange} />}
                label="Yes"
              />
            </FormGroup>
          </FormControl>

          {/* Submit Button */}
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Send Feedback
          </Button>
        </form>
      </Box>
    </Container>
  );
}
