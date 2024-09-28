# E-Ticaret Uygulaması

Bu proje, React ve Vite kullanarak geliştirilmiş bir e-ticaret uygulamasıdır. Kullanıcılar, ürünleri görüntüleyebilir, filtreleyebilir, detaylarını inceleyebilir ve sepete ekleyebilirler. Proje, verileri Fake Store API'den almakta ve kullanıcı arayüzünü Tailwind CSS ile tasarlamaktadır. Durum yönetimi için Redux Toolkit kullanılmıştır.

## Özellikler

- **Ana Sayfa:** Ürünlerin listelendiği sayfa, react-paginate kullanarak sayfalandırma özelliğine sahiptir. Kullanıcılar ürünleri sıralayabilir ve kategorilere göre filtreleme yapabilir.
- **Ürün Detay Sayfası:** Ürünün bilgilerini görüntüleme, ürün miktarını güncelleme ve sepete ekleme seçenekleri sunulmaktadır.
- **Sepet Sayfası:** Kullanıcılar ekledikleri ürünlerin miktarını görebilir, toplam fiyatı görüntüleyebilir ve ürünleri silebilir veya alışverişi onaylayabilirler.

## Ekran Görüntüleri

Proje arayüzünün bir önizlemesini görmek için aşağıdaki GIF veya ekran görüntülerine göz atabilirsiniz:

![E-Ticaret Uygulaması GIF](./desktop.gif)

## Proje Kurulumu

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

1. **Projeyi klonlayın:**

   ```bash
   git clone https://github.com/cengo14/react-redux-e-commarce-project.git
   ```

2. **Proje dizinine gidin:**

   ```bash
   cd react-redux-e-commarce-project
   ```

3. **Gerekli bağımlılıkları yükleyin:**

   ```bash
   npm install
   ```

4. **Uygulamayı başlatın:**

   ```bash
   npm run dev
   ```

5. Tarayıcıda `http://localhost:3000` adresine giderek uygulamayı görüntüleyin.

## Kullanılan Teknolojiler

- **React:** Kullanıcı arayüzü geliştirmek için.
- **Redux Toolkit:** Durum yönetimi için.
- **React Router DOM:** Çok sayfalı yapı için.
- **Axios:** API istekleri yapmak için.
- **Fake Store API:** Ürün verilerini sağlamak için.
- **Tailwind CSS:** Stil düzenlemeleri için modern bir CSS framework.
- **React Slick & Slick Carousel:** Ürünlerin kaydırılabilir bir şekilde görüntülenmesi için.
- **React Icons:** Kullanıcı arayüzünde ikonlar eklemek için.
- **React Paginate:** Sayfalandırma özelliği için.

## Proje Yapısı

```
ecommerce-app/
├── public/
│   └── ...
├── src/
│   ├── assets/          # Kullanılan görseller
│   ├── container/       # Sayfa yapılandırması
│   ├── components/      # React bileşenleri
│   ├── redux/           # Redux Toolkit özellikleri
│   ├── helpers/         # Yardımcı bileşenler
│   ├── utils/           # api dosyaları
│   ├── App.jsx          # Ana bileşen
│   ├── index.css        # Stillendirme dosyası
│   ├── main.css         # Giriş noktası
│   └── ...
├── index.html
├── package.json         # Proje bağımlılıkları
└── README.md            # Proje belgeleri
```


## Katkıda Bulunma

Katkıda bulunmak isterseniz, aşağıdaki adımları takip ederek projeye katkıda bulunabilirsiniz:

1. Projeyi fork edin.
2. Yeni bir feature branch oluşturun (`git checkout -b feature/YourFeature`).
3. Değişikliklerinizi yapın ve commit edin (`git commit -m 'Add some feature'`).
4. Branch'i push edin (`git push origin feature/YourFeature`).
5. Pull request oluşturun.

## Lisans

Bu proje MIT lisansı ile lisanslanmıştır. Ayrıntılar için `LICENSE` dosyasına bakın.
