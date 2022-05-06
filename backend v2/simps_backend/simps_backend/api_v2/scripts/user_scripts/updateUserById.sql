UPDATE  api_v2_user

SET
    email = %s, 
    first_name = %s,
    last_name = %s,
    password = %s,
    avatar = %s
WHERE user_id = %s;

