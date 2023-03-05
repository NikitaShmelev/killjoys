# from django.conf.urls import u
from django.urls import path, include
from .views import (
    CourseListApiView,
    TopicLiatApiView,
    add_test_to_topic
    )

urlpatterns = [
    path('', CourseListApiView.as_view()),
    path('course/<int:pk>/topics',TopicLiatApiView.as_view()),
    path('course/<int:course_id>/topics/<int:topic_id>/create_test', add_test_to_topic)
]