import { Ionicons } from '@expo/vector-icons'; // 👈 ikonlar burada
import React, { useState } from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

export default function PomodoroScreen() {
  const DURATION = 25 * 60;
  const [playing, setPlaying] = useState(false);

  return (
    <ImageBackground
      source={require('../assets/bg-illustration-1.png')} // duvar kağıdı
      className="flex-1 justify-start"
      resizeMode="cover">
      <View className="items-center px-6 pt-32">
        {/* Üst Yazı */}
        <Text className="mb-4 text-2xl font-semibold text-white/90 shadow">You can do it girl</Text>

        {/* Timer */}
        <CountdownCircleTimer
          isPlaying={playing}
          duration={DURATION}
          colors={['#ff8b7e', '#ff6b6b']}
          colorsTime={[DURATION, 0]}
          strokeWidth={12}
          size={300}
          trailColor="rgba(255,255,255,0.3)">
          {({ remainingTime }) => {
            const mm = Math.floor(remainingTime / 60)
              .toString()
              .padStart(2, '0');
            const ss = (remainingTime % 60).toString().padStart(2, '0');

            return (
              <View className="items-center">
                <TickMarks />
                <Text
                  className="text-6xl font-bold text-black"
                  style={{ fontFamily: 'AvenirNextCondensed-Regular' }}>
                  {mm}:{ss}
                </Text>

                {/* Şarkı bilgisi */}
                <Text className="mt-2 text-base text-gray-700">Love Story</Text>
                <Text className="mb-4 text-xs text-gray-500">Taylor Swift</Text>

                {/* Müzik Kontrolleri */}
                <View className="mt-[-10] flex-row items-center gap-8">
                  {/* PREV */}
                  <TouchableOpacity>
                    <Ionicons name="play-skip-back" size={24} color="#000" />
                  </TouchableOpacity>

                  {/* PLAY/PAUSE */}
                  <TouchableOpacity
                    onPress={() => setPlaying((p) => !p)}
                    className="h-16 w-16 items-center justify-center rounded-full bg-red-200">
                    {playing ? (
                      <Ionicons name="pause" size={24} color="#000" />
                    ) : (
                      <Ionicons name="play" size={24} color="#000" />
                    )}
                  </TouchableOpacity>

                  {/* NEXT */}
                  <TouchableOpacity>
                    <Ionicons name="play-skip-forward" size={24} color="#000" />
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        </CountdownCircleTimer>

        {/* Reset Button */}
        <TouchableOpacity
          onPress={() => setPlaying(false)}
          className="mt-8 flex-row items-center gap-2 rounded-2xl bg-white/70 px-8 py-2">
          <Ionicons name="refresh" size={20} color="#555" />
          <Text className="text-base text-gray-800">Reset</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

function TickMarks() {
  const ticks = Array.from({ length: 60 });

  return (
    <View className="absolute inset-0 items-center justify-center">
      {ticks.map((_, i) => {
        const rotation = (i / 60) * 360;

        return (
          <View
            key={i}
            style={{
              position: 'absolute',
              width: 1,
              height: i % 5 === 0 ? 10 : 6, // her 5 dakikada bir uzun çizgi
              backgroundColor: 'rgba(0,0,0,0.25)',
              transform: [
                { rotate: `${rotation}deg` },
                { translateY: -124 }, // dairenin yarıçapı — size'a göre ayarla
              ],
              borderRadius: 2,
            }}
          />
        );
      })}
    </View>
  );
}
