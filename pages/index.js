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
      <div>
        <MyTimeLine {...timeline} />
      </div>

      <div className={styles.grid}>
        <a href="https://www.covid.gov.sg/unwell/overview" className={styles.card}>
          <h4>Protocol 1 &rarr;</h4>
          <p>If you are feeling unwell, please follow Protocol 1</p>
        </a>

        <a href="https://www.covid.gov.sg/well-and-positive-or-condition-assessed-mild-by-doctor" className={styles.card}>
          <h4>Protocol 2 &rarr;</h4>
          <p>If you are feeling well and tested positive, please follow Protocol 2</p>
        </a>

        <a href="https://go.gov.sg/community-ART-test" className={styles.card}>
          <h4>Community ART Testing &rarr;</h4>
          <p>To officially record and then subsequently can collect ART kits from vending machines</p>
        </a>

        <a href="https://www.gowhere.gov.sg/art" className={styles.card}>
          <h4>Where to collect ART kits &rarr;</h4>
          <p>After receiving MOH SMS that required to do self ART test</p>
        </a>
      </div>
    </div>
  )
}
