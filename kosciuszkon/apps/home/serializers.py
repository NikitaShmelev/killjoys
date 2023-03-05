from rest_framework import serializers
from .models import Course, CourseTopic


class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = fields = '__all__'
        
class TopicSerializer(serializers.ModelSerializer):

    class Meta:
        model = CourseTopic
        fields = '__all__'

