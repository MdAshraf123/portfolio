from django.db import models

# Create your models here.
class MyProfile(models.Model):
    name=models.CharField(max_length=20)
    phone_no=models.CharField(max_length=15, null=True, blank=True)
    email_id=models.EmailField()
    linkedIn=models.URLField()
    gitHub=models.URLField()
    experience=models.CharField(max_length=300)
    about_me=models.CharField(max_length=300, null=True, blank=True)
    resume=models.FileField(upload_to='resume/', null=True, blank=True)
    current_city=models.CharField(max_length=30)
    current_state=models.CharField(max_length=30)
    current_country=models.CharField(max_length=40)
    permanent_city=models.CharField(max_length=30, null=True, blank=True)
    permanent_state=models.CharField(max_length=30, null=True, blank=True)
    permanent_country=models.CharField(max_length=40, null=True, blank=True)

    def __str__(self):
        return f"{self.name} "

class Skill(models.Model):
    MyProfile=models.ForeignKey(MyProfile, on_delete=models.CASCADE , related_name='skill')
    skill_name=models.CharField(max_length=100)
    
    def __str__(self):
        return f"{self.skill_name} "

class Project(models.Model):
    MyProfile=models.ForeignKey(MyProfile, on_delete=models.CASCADE , related_name='project')
    project_name=models.CharField(max_length=30)
    project_discription=models.CharField(max_length=500)
    project_start_at=models.DateField(null=True, blank=True)
    project_end_at=models.DateTimeField(null=True, blank=True)
    project_status=models.CharField(max_length=10, choices=[('finished','Finished'),('on_going','On Going')])
    project_link=models.URLField(blank=True, null=True)

    def __str__(self):
        return f"{self.project_name} "
    
class ExtraActivity(models.Model):
    MyProfile=models.ForeignKey(MyProfile, on_delete=models.CASCADE , related_name='extraactivity')
    activity_name=models.CharField(max_length=30)
    reward=models.CharField(max_length=20)

    def __str__(self):
        return f"{self.activity_name} "
    
class Qualification(models.Model):
    MyProfile=models.ForeignKey(MyProfile, on_delete=models.CASCADE , related_name='qualification')
    deg_name=models.CharField(max_length=30)
    college=models.CharField(max_length=60)
    passing_year=models.CharField(max_length=10)
    percent=models.PositiveIntegerField()
    
    def __str__(self):
        return f"{self.deg_name} "
    
