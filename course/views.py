from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Course, CourseTopic, TopicMaterials
from .serializers import CourseSerializer, TopicSerializer
from django.db.models import Max
from rest_framework.decorators import api_view
# import chat_request
from random import randint
import json
import openai
from jsonformatter import JsonFormatter

class ChatgpyRequest:
    MAX_TOKENS = 1870
    
    def __init__(self, max_tokens = 1870):
        self.key = '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'
        self.max_tokens = max_tokens
        
    def create_test_text(self, request_text, question_number=10):
        return f"Create test with {question_number} questions in json format by text '{request_text}'"
        
    def chat_request(self, request_text):
        openai.api_key = self.key
        response = openai.Completion.create(
        model="text-davinci-003",
        prompt = request_text,
        temperature=0,
        max_tokens=self.max_tokens,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0)
        return response.choices[0].text
    
    def serialize_test_chat(self, chat_text):
        return JsonFormatter(chat_text).json_fmt
        

CHAT_GPT = ChatgpyRequest()

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

@api_view(['POST'])
def add_test_to_topic(request, course_id, topic_id):
    req_text = request.data.text
    chat_text = CHAT_GPT.create_test_text(req_text)
    chat_response = CHAT_GPT.chat_request(chat_text)
    file_name = f"Test_course_{course_id}_{topic_id}_{randint(100, 1000)}.json"
    response = CHAT_GPT.serialize_test_chat(chat_response)
    TopicMaterials(name=request.data.name, 
                   course_topic_id = CourseTopic.objects.get(pk=topic_id), 
                   file_path=f"materials\{file_name}"
                   )
    with open(f"materials\{file_name}", 'w') as test_file:
        json.dump(response, test_file)
    return response
        
    
 
        