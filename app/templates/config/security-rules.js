{
    "rules": {
      ".read": "true",
      ".write": "true",
      "users": {
        ".read": true,
        ".indexOn": "email",
        "$user_id": {
          ".write": "$user_id === auth.uid"
        }
      }
    }
  }