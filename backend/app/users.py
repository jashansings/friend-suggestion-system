from pydantic import BaseModel

class User(BaseModel):
    name: str
    email: str
    password: str

def insert_user(conn, user: User):
    cursor = conn.cursor()
    cursor.execute("INSERT INTO users (name, email) VALUES (?, ?)", (user.name, user.email))
    conn.commit()
    return cursor.lastrowid
