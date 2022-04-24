from django.urls import path

from simps_backend.api_v2.views.user_views import UserDetailView

from . import views

urlpatterns = [
        path('berita/', views.BeritaView.as_view()),
        path('berita/<int:pk>/', views.BeritaDetailView.as_view()),
        path('pasangan/', views.PasanganView.as_view()),
        path('pasangan/<int:pk>/', views.PasanganDetailView.as_view()),
        path('kencan/', views.KencanView.as_view()),
        path('kencan<int:pk>/', views.KencanDetailView.as_view()),
        path('laporan/', views.LaporanView.as_view()),
        path('pasangan/<int:pk>/', views.LaporanDetailView.as_view()),
        path('users/', views.UserView.as_view()),
        path('users/<int:pk>/', views.UserDetailView.as_view()),
]
