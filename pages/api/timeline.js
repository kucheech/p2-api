// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dayjs from "dayjs"

export const getTimeLine = datetime => {
  const dt = dayjs(datetime)
  const after72hrs = dt.add(72, 'h')
  const day7 = dt.add(6, 'd').hour(12).minute(0).millisecond(0)
  const day14 = dt.add(13, 'd').hour(12).minute(0).millisecond(0)

  return { dt, after72hrs, day7, day14 }
}

export default function handler(req, res) {
  const { datetime } = req.query
  const timeline = getTimeLine(datetime)

  res.status(200).json(timeline)
}
