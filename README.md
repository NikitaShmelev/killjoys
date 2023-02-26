!!! Run project


bash```
 docker-compose up -d --build 
```

bash```
 docker-compose exec web python manage.py migrate --noinput
```

!!! If you had problems during set up - try next command and try again from beginnig 
bash```
pose down -v
```


!!!! connect to db
bash```
docker-compose exec db psql --username=killjoys --dbname=killjoys
```