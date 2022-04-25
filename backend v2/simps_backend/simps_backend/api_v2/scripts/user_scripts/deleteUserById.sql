DELETE FROM api_v2_user
WHERE user_id = %s
LIMIT 1;
