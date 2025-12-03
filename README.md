# 🍅 Pomodoro Timer Uygulaması

Modern ve kullanıcı dostu bir Pomodoro timer uygulaması. Odaklanmanıza yardımcı olmak için LoFi müzik eşliğinde çalışma seansları yapın.

## 📱 Ekran Görüntüleri

### Ekran Görüntüsü 1

![Ekran Görüntüsü 1](./screenshots/ss1.png)

### Ekran Görüntüsü 2

![Ekran Görüntüsü 2](./screenshots/ss2.png)

## ✨ Özellikler

- ⏱️ **25 dakikalık Pomodoro timer** - Klasik Pomodoro tekniği ile odaklanma seansları
- 🎵 **LoFi müzik desteği** - Çalışma sırasında rahatlatıcı LoFi müzikler dinleyin
- 🎨 **Modern ve şık arayüz** - Göz alıcı illüstrasyonlar ve temiz tasarım
- ⏯️ **Müzik kontrolleri** - Şarkıları duraklat, önceki/sonraki şarkıya geç
- 🔄 **Reset özelliği** - Timer'ı istediğiniz zaman sıfırlayın
- 📊 **Görsel geri sayım** - Dairesel timer ile kalan süreyi görsel olarak takip edin

## 🛠️ Teknolojiler

- **React Native** - Mobil uygulama geliştirme framework'ü
- **Expo** - React Native geliştirme platformu
- **TypeScript** - Tip güvenli kod yazımı
- **NativeWind** - Tailwind CSS ile stil verme
- **Expo Audio** - Ses çalma özellikleri
- **Countdown Circle Timer** - Dairesel geri sayım komponenti

## 📦 Kurulum

### Gereksinimler

- Node.js (v18 veya üzeri)
- pnpm (veya npm/yarn)
- Expo CLI
- iOS Simulator veya Android Emulator (veya fiziksel cihaz)

### Adımlar

1. Projeyi klonlayın:

```bash
git clone <repository-url>
cd pomodoro
```

2. Bağımlılıkları yükleyin:

```bash
pnpm install
```

3. Uygulamayı başlatın:

```bash
# iOS için
pnpm ios

# Android için
pnpm android

# Web için
pnpm web
```

## 🎮 Kullanım

1. Uygulamayı açın
2. Timer'ı başlatmak için play butonuna basın
3. LoFi müzik otomatik olarak çalmaya başlayacak
4. Şarkıları değiştirmek için önceki/sonraki butonlarını kullanın
5. Timer'ı sıfırlamak için Reset butonuna basın

## 📁 Proje Yapısı

```
pomodoro/
├── app/                    # Ana uygulama dosyaları
│   ├── index.tsx          # Ana Pomodoro ekranı
│   └── ...
├── components/             # React bileşenleri
│   ├── TimerDisplay.tsx   # Timer gösterimi
│   ├── MusicControls.tsx  # Müzik kontrolleri
│   └── ...
├── assets/                 # Görseller ve ses dosyaları
│   ├── audio/             # LoFi müzik dosyaları
│   └── bg-illustration-*.png  # Arka plan illüstrasyonları
└── screenshots/            # Ekran görüntüleri
```

## 🎵 Müzikler

Uygulama şu anda iki LoFi müzik içermektedir:

- **LoFi Chill Study** - JayStacksBeats
- **LoFi Jazz Lounge** - ChilltapeFM

## 📝 Lisans

MIT Lisans

## 👨‍💻 Geliştirici

Zafer AYAN

---

**Not:** Bu uygulama Pomodoro tekniğini kullanarak odaklanmanıza ve verimli çalışmanıza yardımcı olmak için tasarlanmıştır. 🍅✨
