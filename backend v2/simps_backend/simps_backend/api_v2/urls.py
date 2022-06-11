from django.urls import path


from . import views

urlpatterns = [
        path('berita/', views.BeritaView.as_view()),
        path('berita/<int:pk>', views.BeritaDetailView.as_view()),
        path('status-pasangan/', views.StatusPasanganView.as_view()),
        path('pasangan/', views.PasanganView.as_view()),
        path('pasangan/<int:pk>', views.PasanganDetailView.as_view()),
        path('status-kencan/', views.StatusKencanView.as_view()),
        path('kencan/', views.KencanView.as_view()),
        path('kencan/<int:pk>', views.KencanDetailView.as_view()),
        path('laporan/', views.LaporanView.as_view()),

        path('user/', views.UserView.as_view()),
        path('user/<int:pk>', views.UserDetailView.as_view()),

        # UTILS
        path('utils/tanggal-penting/', views.TanggalPentingView.as_view())
]
