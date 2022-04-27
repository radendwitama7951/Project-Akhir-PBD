INSERT INTO api_v2_kencan
  (
    tanggal,
    jam,
    tempat,
    pasangan_id,
    biaya,
    status_kencan_id
  )
VALUES
  (
    %s, 
    %s,
    %s,
    %s,
    %s, 
    %s
  );
