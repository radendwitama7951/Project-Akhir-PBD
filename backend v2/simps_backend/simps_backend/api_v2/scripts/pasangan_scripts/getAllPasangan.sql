select
  pasangan_id,
  first_name,
  last_name,
  special_name,
  avatar,
  kencan_terakhir,
  status_pasangan_id,
  api_v2_statuspasangan.keterangan as status_pasangan
from api_v2_pasangan
  join api_v2_statuspasangan
    using (status_pasangan_id)
ORDER BY api_v2_pasangan.special_name;
