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
        