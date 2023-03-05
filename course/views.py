from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Course, CourseTopic
from .serializers import CourseSerializer, TopicSerializer
from django.db.models import Max

class CourseListApiView(APIView):
    def get(self, request, *args, **kwargs):
        courses = Course.objects.filter(status='O')
        serializer = CourseSerializer(courses, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, *args, **kwargs):
        data = {
            'name': request.data.get('name'), 
            'owner': request.data.get('owner'), 
            'summary': request.data.get('summary'),
            'satus': request.data.get('satus')
        }
        serializer = CourseSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response({'data': serializer.data}, status=status.HTTP_201_CREATED)

        return Response({'data': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

class TopicLiatApiView(APIView):
    
    def get(self, request, pk=None, *args, **kwargs):
        topics = CourseTopic.objects.filter(course_id=pk)
        serializer = TopicSerializer(topics, many=True)
        
        return Response({'data': serializer.data}, status=status.HTTP_200_OK)
    
    def post(self, request, pk=None, *args, **kwargs):
        last_topics = int(CourseTopic.objects.filter(course_id=pk).aggregate(Max('course_position')).course_position or 0)
        data = {
            'name': request.data.get('name'), 
            'course_id': Course.objects.get(pk=pk), 
            'course_position': last_topics+1
        }
        serializer = CourseSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
        