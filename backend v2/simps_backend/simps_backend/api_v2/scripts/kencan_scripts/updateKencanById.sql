UPDATE  api_v2_kencan
SET
    tanggal = %s,
    jam = %s,
    tempat = %s,
    pasangan_id = %s,
    biaya = %s,
    status_kencan_id = %s
WHERE kencan_id = %s;
