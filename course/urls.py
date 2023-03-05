# from django.conf.urls import u
from django.urls import path, include
from .views import (
    CourseListApiView,
)

urlpatterns = [
    path('', CourseListApiView.as_view()),
]