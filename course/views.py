from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Course
from .serializers import CourseSerializer

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
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
