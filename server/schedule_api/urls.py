from rest_framework import routers
from .views import ShiftsViewSet

router = routers.SimpleRouter()

router.register(r'shifts', ShiftsViewSet, basename="shifts")

urlpatterns = [
]

urlpatterns += router.urls