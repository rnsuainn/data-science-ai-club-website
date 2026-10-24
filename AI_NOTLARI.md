# GitHub Copilot AI Notları

Bu kayıt, etkinlik araması ve mobil düzen için verilen istekleri üç ayrı prompt başlığında toplar. Çözüm ve kabul/değişiklik gerekçeleri, bu projeye eklenen kodla uyumludur.

## Prompt 1: Etkinlik başlığı araması

**Prompt:** “Etkinlikler sayfasına başlıkta anlık arama ekle. Erişilebilir bir etiket, büyük/küçük harf duyarsız eşleşme, gösterilen etkinlik sayısı, boş sonuç mesajı ve aramayı sıfırlayan Temizle düğmesi olsun.”

**Copilot'ın önerdiği çözüm:** `etkinlikler.html` içine etiketli arama alanı, canlı sayaç, boş sonuç mesajı ve temizleme düğmesi eklemek; `script.js` içinde `input` olayında başlıkları `toLowerCase()` ve `includes()` ile filtrelemek.

**Karar:** Öneri kabul edildi. Arama yalnızca `h2` başlıklarında çalışır; böylece açıklama, tarih veya yer eşleşmesi kartı yanlışlıkla göstermez. Temizle düğmesi sayacı ve kartları sıfırladıktan sonra odağı arama alanına döndürür. Sayaç `aria-live="polite"`, boş sonuç metni `role="status"` ile erişilebilir kılındı.

## Prompt 2: Mobil kart düzeni

**Prompt:** “Mevcut görsel dili koru. Etkinlik ve yönetim ekibi kartları telefonda tek sütun olsun; sayfa 320px genişlikte yatay kayma oluşturmasın.”

**Copilot'ın önerdiği çözüm:** `style.css` içine dar ekran medya sorguları eklemek; kart ızgaralarını tek sütuna geçirmek ve dar alanlarda içeriklerin taşmasını önlemek.

**Karar:** Öneri kabul edildi ve `max-width: 480px` sınırında uygulandı. Etkinlik kartlarının iç düzeni de küçük ekranda dikey akışa çevrildi; başlıklara `overflow-wrap: anywhere` eklendi. Bu yaklaşım mevcut renkleri ve geniş ekran görünümünü değiştirmeden mobil alanı rahatlatır.

## Prompt 3: Proje notları ve doğrulama

**Prompt:** “AI_NOTLARI.md dosyasında en az üç farklı promptu, önerilen çözümleri ve kabul/değiştirme nedenlerini açıkla. TEST_NOTLARI.md içinde arama, temizleme, gezinme ve 320px kontrolü için istenen sütunlara sahip bir test tablosu hazırla.”

**Copilot'ın önerdiği çözüm:** İstemleri konu başlıklarına ayırıp karar gerekçelerini yazmak; zorunlu senaryoları beklenen ve gerçekleşen sonuç sütunları olan bir Markdown tablosunda izlemek.

**Karar:** Öneri kabul edildi. Test notlarında doğrulama sonucu, gerçekten kontrol edilenlerle henüz tarayıcıda denenmemiş senaryoları ayıracak şekilde kaydedilir; böylece planlanan test, yapılmış test gibi gösterilmez.