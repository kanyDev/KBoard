-- OAuth2

SELECT * FROM t5_user ORDER BY id DESC;

ALTER TABLE t5_user
ADD COLUMN provider VARCHAR(40);

ALTER TABLE t5_user
ADD COLUMN providerId VARCHAR(200);

