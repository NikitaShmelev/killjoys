from rest_framework import serializers
from .models import Course


class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = fields = '__all__'
        
class TopicSerializer(serializers.ModelSerializer):
    pass
    # class Meta:
    #     model = Topic
    #     fields = '__all__'

