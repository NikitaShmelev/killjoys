from django.db import models

class Course(models.Model):
    # STATUS_CHOICES = (
    #     ('O', 'Open'),
    #     ('P', 'Private'),)
    
    name = models.CharField(max_length=200)
    owner = models.CharField(max_length=200)
    summary = models.TextField(default='')
    created_date = models.DateField(auto_now_add=True, blank=True)
    status = models.IntegerField(default=1)

class CourseTopic(models.Model):
    name = models.CharField(max_length=200)
    course_id = models.ForeignKey(Course, default=-1, on_delete=models.PROTECT, null=True)
    course_position = models.IntegerField()

class TopicMaterials(models.Model):
    name = models.CharField(max_length=200)
    course_topic_id = models.ForeignKey(CourseTopic, default=-1, on_delete=models.PROTECT, null=True)
    file_path = models.CharField(max_length=500)
    