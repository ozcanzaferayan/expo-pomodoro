import React from 'react';
import { Text } from 'react-native';
import { TickMarks } from './TickMarks';

type Props = {
  remainingTime: number;
  title: string;
  artist: string;
};

export const TimerDisplay = ({ remainingTime, title, artist }: Props) => {
  const mm = Math.floor(remainingTime / 60)
    .toString()
    .padStart(2, '0');
  const ss = (remainingTime % 60).toString().padStart(2, '0');

  return (
    <>
      <TickMarks />

      <Text
        className="text-6xl font-bold leading-tight text-black"
        style={{ fontFamily: 'Apple SD Gothic Neo' }}>
        {mm}:{ss}
      </Text>

      <Text className="mt-2 text-base text-gray-700">{title}</Text>
      <Text className="mb-4 text-xs text-gray-500">{artist}</Text>
    </>
  );
};
