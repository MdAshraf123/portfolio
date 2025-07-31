from rest_framework import serializers
from .models import (MyProfile,
                     Skill,
                     Project,
                     ExtraActivity,
                     Qualification)

class MyProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model=MyProfile
        exclude=['id','resume','phone_no']

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model=Skill
        fields=['skill_name']

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model=Project
        exclude=['id','MyProfile']

class ExtraActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model=ExtraActivity
        exclude=['id','MyProfile']

class QualificationSerializer(serializers.ModelSerializer):
    class Meta:
        model=Qualification
        exclude=['id','MyProfile']