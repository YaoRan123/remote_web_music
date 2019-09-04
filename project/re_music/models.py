from django.db import models

# Create your models here.

class Test(models.Model):
    name = models.CharField(max_length=20)

class MusicFoldersPath(models.Model):
    MusicFP=models.CharField(max_length=100)

class MusicFileName(models.Model):
    Mfname=models.CharField(max_length=30)
    Mfpath=MusicFoldersPath