import { MusicControls } from '@/components/MusicControls';
import { TimerDisplay } from '@/components/TimerDisplay';
import { Ionicons } from '@expo/vector-icons'; // 👈 ikonlar burada
import { useAudioPlayer } from 'expo-audio';
import React, { useEffect, useState } from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

// 🎵 PLAYLIST
const TRACKS = [
  {
    title: 'LoFi Chill Study',
    artist: 'JayStacksBeats',
    audio: require('../assets/audio/lofi-chill.mp3'),
    bg: require('../assets/bg-illustration-1.png'),
  },
  {
    title: 'LoFi Jazz Lounge',
    artist: 'ChilltapeFM',
    audio: require('../assets/audio/lofi-jazz.mp3'),
    bg: require('../assets/bg-illustration-2.png'),
  },
];

export default function PomodoroScreen() {
  const DURATION = 25 * 60; // 25 dk
  const HALF_TIME = 16 * 60; // örnek başlangıç (yarım gösterim)

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const track = TRACKS[currentTrackIndex];

  const [isPlaying, setIsPlaying] = useState(false);

  const player = useAudioPlayer(track.audio);

  // loop ayarını bir kere yap
  useEffect(() => {
    player.loop = true;
  }, [player]);

  // track değişince ve hala playing ise -> yeni şarkıyı baştan çal
  useEffect(() => {
    if (isPlaying) {
      player.seekTo(0);
      player.play();
    }
  }, [currentTrackIndex, isPlaying, player]);

  const handlePlayPause = () => {
    if (!isPlaying) {
      player.play();
    } else {
      player.pause();
    }
    setIsPlaying((p) => !p);
  };

  const handleSkipNext = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % TRACKS.length);
  };

  const handleSkipPrev = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + TRACKS.length) % TRACKS.length);
  };

  const handleReset = () => {
    setIsPlaying(false);
    player.pause();
  };

  return (
    <ImageBackground source={track.bg} className="flex-1 justify-start" resizeMode="cover">
      <View className="items-center px-6 pt-32">
        {/* Üst Yazı */}
        <Text className="mb-4 text-2xl font-semibold text-white/90 shadow">You can do it girl</Text>

        {/* Timer */}
        <CountdownCircleTimer
          isPlaying={isPlaying}
          duration={DURATION}
          colors={['#ff8b7e', '#ff6b6b']}
          colorsTime={[DURATION, 0]}
          strokeWidth={12}
          rotation="counterclockwise"
          size={300}
          initialRemainingTime={HALF_TIME}
          trailColor="#ff8b7e33">
          {({ remainingTime }) => {
            return (
              <View className="items-center">
                <TimerDisplay
                  remainingTime={remainingTime}
                  title={track.title}
                  artist={track.artist}
                />
                <MusicControls
                  isPlaying={isPlaying}
                  onPlayPause={handlePlayPause}
                  onNext={handleSkipNext}
                  onPrev={handleSkipPrev}
                />
              </View>
            );
          }}
        </CountdownCircleTimer>

        {/* Reset Button */}
        <TouchableOpacity
          onPress={handleReset}
          className="mt-8 flex-row items-center gap-2 rounded-2xl bg-white/70 px-8 py-2">
          <Ionicons name="refresh" size={20} color="#555" />
          <Text className="text-base text-gray-800">Reset</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
