from rest_framework import routers
from .views import ShiftsViewSet

router = routers.SimpleRouter()

router.register(r'', ShiftsViewSet, basename="")

# Insert more routes here as needed

urlpatterns = [
]

urlpatterns += router.urls