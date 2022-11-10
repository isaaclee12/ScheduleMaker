from rest_framework import routers
from .views import ShiftsViewSet, DateViewSet

router = routers.SimpleRouter()

router.register(r'shifts', ShiftsViewSet, basename="shifts")
router.register(r'dates', DateViewSet, basename="dates")

# Insert more routes here as needed

urlpatterns = [
]

urlpatterns += router.urls