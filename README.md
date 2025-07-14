# Инструкция по развёртыванию проекта Delivery Report



## Клонировать репозиторий:
git clone https://github.com/your-username/delivery-report.git

cd delivery-report



## Настроить и запустить Django backend:
python -m venv venv

Windows:

venv\Scripts\activate

Linux/macOS:

source venv/bin/activate

pip install -r requirements.txt

python manage.py migrate

python manage.py createsuperuser

python manage.py runserver



## Запустить React frontend:

cd frontend

npm install --legacy-peer-deps

npm start



## Доступы и ссылки:

Django Admin: http://localhost:8000/admin/

API доставки: http://localhost:8000/api/deliveries/

Веб-отчёт (React): http://localhost:3000



## Настройка CORS в Django (если нужно):

В settings.py добавить:

INSTALLED_APPS += ['corsheaders']

MIDDLEWARE = ['corsheaders.middleware.CorsMiddleware'] + MIDDLEWARE

CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
]

Важно: сначала запускай backend (python manage.py runserver), потом frontend (npm start).
