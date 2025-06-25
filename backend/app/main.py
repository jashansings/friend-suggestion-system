from fastapi import FastAPI
from app.routes import router
from app.db import init_db

app = FastAPI()
app.include_router(router)

init_db()
