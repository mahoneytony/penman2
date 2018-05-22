from django.db import models

# Create your models here.

class Order(models.Model):
    number = models.CharField(max_length=255)
    topic = models.CharField(max_length=255)

    def __str__(self):
        return self.topic
