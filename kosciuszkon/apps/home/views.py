from django.shortcuts import render
from django.http import HttpResponseRedirect, HttpResponse
from django.contrib import messages
import json



# def index(request):
#     response_data = {
#         "data": [
#             {
#                 "id": 1,
#                 "name": "Nikita",
#             },
#             {
#                 "id": 2,
#                 "name": "Vova",
#             },
#             {
#                 "id": 3,
#                 "name": "Glib",
#             }
#         ]
#     }
#     return HttpResponse(json.dumps(response_data), content_type="application/json")