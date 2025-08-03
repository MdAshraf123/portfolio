from django.urls import path
from . import views

urlpatterns=[
    path('profile/',views.MyProfileGenericAPIView.as_view(),name='profile'),
    path('projects/',views.ProjectListAPIView.as_view(),name='projects' ),
    path('skills/',views.SkillListAPIView.as_view(), name='skills'), 
    path('extra-activities/',views.ExtraActivityListAPIView.as_view(), name='extra-activities'),
    path('qualifications/',views.QualificationListAPIView.as_view(), name='qualifications'),
    path('send-email/', views.SendMailAPIView.as_view(), name='send-email'),
]