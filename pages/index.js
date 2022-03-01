import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css'
import { getTimeLine } from './api/timeline';
import dayjs from 'dayjs';
import MyDateTimePicker from '../components/DateTimePicker';
import MyTimeLine from '../components/MyTimeLine';

export default function Home() {
  const [value, setValue] = useState(dayjs())
  const [timeline, setTimeline] = useState(getTimeLine(undefined))

  useEffect(() => {
    const timeline = getTimeLine(value)
    setTimeline(timeline)
  }, [value])

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <MyDateTimePicker value={value} setValue={setValue} />
      </div>
      <div className='card'>
        <MyTimeLine {...timeline} />
      </div>

    </div>
  )
}
