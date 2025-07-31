from django.urls import path
from . import views

urlpatterns=[
    path('profile/',views.MyProfileGenericAPIView.as_view(),name='profile'),
    path('project/',views.ProjectListAPIView.as_view(),name='project' ),
    path('skill/',views.SkillListAPIView.as_view(), name='skill'), 
    path('extra-activity/',views.ExtraActivityListAPIView.as_view(), name='extra-activity'),
    path('qualification/',views.QualificationListAPIView.as_view(), name='qualification'),
   
]