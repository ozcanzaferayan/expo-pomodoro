import { View } from 'react-native';

export function TickMarks() {
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
