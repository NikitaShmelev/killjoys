!!! Run project


```
docker-compose up -d --build 
```

```
docker-compose exec django_app python manage.py migrate --noinput
```

!!! If you had problems during set up - try next command and try again from beginnig 
```
pose down -v
```


!!!! connect to db
```
docker-compose exec db psql --username=killjoys --dbname=killjoys
```