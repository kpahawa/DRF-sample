from django.db import models


# Create your models here.
class ConfigModel(models.Model):
    backend_url = models.CharField(max_length=500, default='127.0.0.1')
    backend_port = models.IntegerField(default=8205)
    config_type = models.CharField(max_length=200, default='local')
