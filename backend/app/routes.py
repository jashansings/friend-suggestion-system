from fastapi import APIRouter
from app.db import get_connection
from app.users import User, insert_user

router = APIRouter()

@router.post("/users")
def create_user(user: User):
    conn = get_connection()
    user_id = insert_user(conn, user)
    conn.close()
    return {"id": user_id}


@router.post("/register")
def register_user():
    pass