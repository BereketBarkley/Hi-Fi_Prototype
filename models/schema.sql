DROP TABLE IF EXISTS log;

CREATE TABLE log (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  userID TEXT,
  activity TEXT,
  created_at DATE DEFAULT CURRENT_TIMESTAMP
);


menu - user , decide based on what i have for the trable
