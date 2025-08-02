from django.contrib import admin
from .models import (MyProfile,
                     Skill,
                     Project,
                     ExtraActivity,
                     Qualification)
# Register your models here.
class AdminMyProfile(admin.ModelAdmin):
    model=MyProfile
    list_display=['name','email_id','linkedIn','gitHub','experience', 'about_me','current_city','current_state','current_country']
admin.site.register(MyProfile, AdminMyProfile)

class AdminSkill(admin.ModelAdmin):
    model=Skill
    list_display=['skill_name']
admin.site.register(Skill, AdminSkill)

class AdminProject(admin.ModelAdmin):
    model=Project
    list_display=['project_name','project_discription','project_start_at','project_end_at','project_status','project_link']
admin.site.register(Project, AdminProject)

class AdminExtraActivity(admin.ModelAdmin):
    model=ExtraActivity
    list_display=['activity_name','reward']
admin.site.register(ExtraActivity, AdminExtraActivity)

class AdminQualification(admin.ModelAdmin):
    model=Qualification
    list_display=['deg_name','college','passing_year','percent']
admin.site.register(Qualification, AdminQualification)