print(
    "Start #################################################################"
  );
  
  db = db.getSiblingDB("movies");
  db.createUser({
    user: "user",
    pwd: "123456",
    roles: [{ role: "readWrite", db: "movies" }],
  });
  db.createCollection("users");
  
  print("END #################################################################");