import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import Filter7Icon from '@mui/icons-material/Filter7';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import { green } from '@mui/material/colors';

import dayjs from 'dayjs'

export default function MyTimeLine({ dt, after72hrs, day7, day14 }) {
  return (
    <Timeline position="left">
      <TimelineItem>
        <TimelineOppositeContent >
          <Typography color="red">{dt.format('ddd DD MMM YYYY hh:mm a')}</Typography>
          <Typography color="text.secondary" sx={{ fontStyle: 'italic' }}>self isolate for at least 72 hours</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="warning" variant="outlined">
            <HomeIcon color="warning" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ typography: 'h6' }}>Date/time of ART test</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          {after72hrs.format('ddd DD MMM YYYY hh:mm a')}
          <Typography color="text.primary" sx={{ fontWeight: 'bold' }}>take an ART self test</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <AccessTimeIcon color="primary" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ typography: 'h6' }}>After 72 hours</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography>whenever your next ART is negative,</Typography>
          <Typography>can exit self-isolation</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant='outlined'>
            <MoreTimeIcon sx={{ color: green[300] }} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ typography: 'h4' }}>~</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          {day7.format('ddd DD MMM YYYY hh:mm a')}
          <Typography>automatic self discharge for fully vaccinated individuals and children below 12</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant='outlined'>
            <Filter7Icon sx={{ color: green[500] }} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ typography: 'h6' }}>Day 7</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          {day14.format('ddd DD MMM YYYY hh:mm a')}
          <Typography>automatic self discharge for partially/unvaccinated individuals aged 12 and above</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant='outlined'>
            <SentimentSatisfiedAltIcon sx={{ color: green[800] }} />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent sx={{ typography: 'h6' }}>Day 14</TimelineContent>
      </TimelineItem>
    </Timeline >
  )
}