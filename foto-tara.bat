@echo off
chcp 65001 > nul
echo.
echo =======================================================
echo 📸 Fotoğraflar ve Klasörler Taranıyor...
echo (Yeni eklenen veya silinen tüm fotoğraflar güncellenecek)
echo =======================================================
echo.
python foto-tara.py
echo.
echo =======================================================
echo ✅ İŞLEM TAMAMLANDI!
echo Sitenizi tarayıcıda yenileyerek son hali görebilirsiniz.
echo =======================================================
echo.
pause
