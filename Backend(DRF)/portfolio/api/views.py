from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.generics import GenericAPIView,ListAPIView
from .models import (MyProfile,
                    Skill,
                    Project,
                    ExtraActivity,
                    Qualification)
from .serializers import (MyProfileSerializer,
                          ProjectSerializer,
                          SkillSerializer,
                          ExtraActivitySerializer,
                          QualificationSerializer
                          )

# Create your views here.

class MyProfileGenericAPIView(GenericAPIView):
    queryset=MyProfile.objects.all()
    serializer_class=MyProfileSerializer

    def get(self, request):
        profile=self.get_queryset().get(pk=1)
        serializer=self.get_serializer(profile)
        return Response(serializer.data)
    
class SkillListAPIView(ListAPIView):
    queryset=Skill.objects.all()
    serializer_class=SkillSerializer

    def list(self, requset, *args, **kwargs):
        queryset=self.get_queryset()
        serializer=self.get_serializer(queryset, many=True)
        return Response({
            'success':True,
            'total':queryset.count(),
            'skills':serializer.data,
        })


class ProjectListAPIView(ListAPIView):
    queryset=Project.objects.all()
    serializer_class=ProjectSerializer

class ExtraActivityListAPIView(ListAPIView):
    queryset=ExtraActivity.objects.all()
    serializer_class=ExtraActivitySerializer

    def list(self, request,*args, **kwargs):
        queryset=self.get_queryset()
        serializer=self.get_serializer(queryset, many=True)
        return Response({
            "success": True,
            "total": queryset.count(),
            "extra_activities": serializer.data
        })

class QualificationListAPIView(ListAPIView):
    queryset=Qualification.objects.all()
    serializer_class=QualificationSerializer

    def list(self,request, *args,**kwargs):
        queryset=self.get_queryset()
        serializer=self.get_serializer(queryset, many=True)
        return Response({
            'success':True,
            'total':queryset.count(),
            'qualifications':serializer.data,
        })
