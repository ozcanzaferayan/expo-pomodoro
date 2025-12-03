import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

type Props = {
  isPlaying: boolean;
  onPlayPause: () => void;
  onNext: () => void;
  onPrev: () => void;
};

export const MusicControls = ({ isPlaying, onPlayPause, onNext, onPrev }: Props) => {
  return (
    <View className="mt-[-10] flex-row items-center gap-8">
      <TouchableOpacity onPress={onPrev}>
        <Ionicons name="play-skip-back" size={24} color="#000" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onPlayPause}
        className="h-16 w-16 items-center justify-center rounded-full bg-red-200">
        {isPlaying ? (
          <Ionicons name="pause" size={26} color="#000" />
        ) : (
          <Ionicons name="play" size={26} color="#000" />
        )}
      </TouchableOpacity>

      <TouchableOpacity onPress={onNext}>
        <Ionicons name="play-skip-forward" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );
};
