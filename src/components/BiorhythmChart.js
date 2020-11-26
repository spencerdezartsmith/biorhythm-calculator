import React from 'react';
import dayjs from 'dayjs';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  ReferenceLine,
  CartesianGrid,
} from 'recharts';
import { calculateBiorhythmSeries } from '../calculations';

function formatDate(isoString) {
  return dayjs(isoString).format('D MMM');
}

function BiorhythmChart({ birthDate, targetDate }) {
  const startDate = dayjs(targetDate).subtract(15, 'days').toISOString();
  const data = calculateBiorhythmSeries(birthDate, startDate, 31).map(
    (item) => {
      return { ...item, date: formatDate(item.date) };
    }
  );
  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data}>
        <XAxis
          dataKey="date"
          ticks={[data[3].date, data[15].date, data[27].date]}
        />
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <ReferenceLine x={data[15].date} />
        <Line type="natural" dot={false} dataKey="physical" stroke="red" />
        <Line type="natural" dot={false} dataKey="emotional" stroke="green" />
        <Line type="natural" dot={false} dataKey="intellectual" stroke="blue" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default BiorhythmChart;
