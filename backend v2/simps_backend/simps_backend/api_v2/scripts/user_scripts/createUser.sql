INSERT INTO `api_v2_user` 
  (
    `email`,
    `first_name`,
    `last_name`,
    `password`,
    `last_login`
  )
VALUES
  (
    '%s', -- email
    '%s', -- First Name
    '%s', -- Last Name
    '%s', -- Password
    NOW()
  );
