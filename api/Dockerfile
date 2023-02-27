FROM python:3.10.6-slim

ENV PYTHONUNBUFFERED=1

WORKDIR /app

RUN apt-get update -y && apt-get install -y libpq-dev gcc

COPY . .

RUN pip install -r requirements.txt

CMD python manage.py makemigrations && \
    python manage.py migrate && \
    python populatedb.py && \
    python manage.py runserver 0.0.0.0:8000