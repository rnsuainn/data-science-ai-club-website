# Data Science & AI Club Web Sitesi

Kampüs Data Science & AI Club için HTML, CSS ve JavaScript ile hazırlanmış, üç sayfalı tanıtım sitesi.

## Sayfalar

- `index.html`: Kulübün vizyonu, ana tanıtım alanı ve sayfalara yönlendirmeler.
- `etkinlikler.html`: Etkinlik kartları, başlık araması, sonuç sayacı ve temizleme düğmesi.
- `hakkimizda.html`: Kulübün amacı, değerleri ve yönetim ekibi.

## Özellikler

- Üç sayfada ortak gezinme ve `style.css` ile yönetilen koyu, mobil uyumlu tasarım.
- Veri noktaları ve bağlantı çizgilerinden oluşan hareketli canvas arka planı.
- Ana sayfadaki veri grafiği fare/işaretçi hareketine hafifçe tepki verir.
- Etkinlik başlığı araması büyük/küçük harfe duyarsızdır; sayaç ve boş sonuç durumu gösterir.
- “Temizle” düğmesi aramayı sıfırlar ve tüm etkinlikleri yeniden gösterir.
- `prefers-reduced-motion` tercihi etkin olduğunda sürekli arka plan hareketi duraklatılır.

## Dosya yapısı

```text
index.html
etkinlikler.html
hakkimizda.html
style.css
script.js
AI_NOTLARI.md
TEST_NOTLARI.md
```

## Yerelde çalıştırma

Proje derleme veya paket kurulumu gerektirmez. Proje klasöründe basit bir HTTP sunucusu başlat:

```bash
python3 -m http.server 8000
```

Ardından `http://localhost:8000` adresini aç. Port 8000 kullanımda ise komutta farklı bir port seçebilirsin.

## Öğrenme ve test notları

- [AI_NOTLARI.md](AI_NOTLARI.md): Copilot istemleri, öneriler ve uygulama kararları.
- [TEST_NOTLARI.md](TEST_NOTLARI.md): Arama, gezinme ve mobil görünüm test senaryoları.