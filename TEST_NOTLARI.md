# Test Notları

| Test / İşlem | Beklenen Sonuç | Gerçekleşen Sonuç |
|---|---|---|
| Tam ve kısmi kelime araması: `Python` ve ardından `Pyth` yaz. | Her iki aramada da yalnızca “Python ile Veri Analizine Giriş” kartı görünür; sayaç 1 olur. | `script.js` DOM denetiminde tam ve kısmi eşleşme başarılı. |
| Büyük/küçük harf duyarsızlığı araması: `mAcHiNe` yaz. | “Machine Learning Workshop” kartı görünür; sayaç 1 olur. | `script.js` DOM denetiminde karışık büyük/küçük harf eşleşmesi başarılı. |
| Eşleşmeyen terim araması: `istatistik` yaz. | Sayaç 0 olur ve “Aradığınız kriterlere uygun veri bilimi etkinliği bulunamadı” mesajı görünür. | `script.js` DOM denetiminde sayaç 0 ve boş sonuç mesajı doğrulandı. |
| Temizle düğmesi işlevi: Bir arama yaptıktan sonra “Temizle”ye bas. | Girdi boşalır, beş kart yeniden görünür, sayaç 5 olur ve odak arama alanına döner. | `script.js` DOM denetiminde sıfırlama, beş kartın görünmesi ve odak doğrulandı. |
| Sayfa navigasyon bağlantılarının çalışması: Ana Sayfa, Etkinlikler ve Hakkımızda bağlantılarını kullan. | Her bağlantı ilgili HTML sayfasını açar. | Üç sayfa ve HTML içi navigasyon hedefleri HTTP 200 yanıtı verdi. |
| 320px mobil genişlikte yatay kayma kontrolü: Görünüm genişliğini 320 CSS piksele ayarla. | `document.documentElement.scrollWidth` değeri `clientWidth` değerini aşmaz; etkinlik ve ekip kartları tek sütundur. | 480px altı tek sütun CSS kuralı eklendi; tarayıcı/viewport aracı bulunmadığından yatay taşma ölçümü yapılmadı. |