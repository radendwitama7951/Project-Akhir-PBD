INSERT INTO api_v2_berita
(
  judul,
  tanggal,
  deskripsi,
  url,
  thumbnail
)
VALUES
(
  %s,
  NOW(),
  %s,
  %s,
  %s
)
