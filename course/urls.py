# from django.conf.urls import u
from django.urls import path, include
from .views import (
    CourseListApiView,
    TopicLiatApiView
)

urlpatterns = [
    path('', CourseListApiView.as_view()),
    path('course/<int:pk>/topics',TopicLiatApiView.as_view())
]