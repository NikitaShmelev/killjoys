from rest_framework import serializers
from .models import Course, Topic


class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = fields = '__all__'
        
class TopicSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Topic
        fields = '__all__'

