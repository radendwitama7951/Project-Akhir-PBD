UPDATE  api_v2_pasangan

SET
    first_name = %s,
    last_name = %s,
    special_name = %s,
    avatar = %s,
    ulang_tahun = %s,
    tanggal_jadian = %s,
    kencan_terakhir = %s,
    status_pasangan_id = %s
WHERE pasangan_id = %s
LIMIT 1;
