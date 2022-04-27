UPDATE  api_v2_berita

SET
   judul = %s,
   deskripsi = %s,
   url = %s,
   thumbnail = %s
WHERE berita_id = %s
LIMIT 1;
