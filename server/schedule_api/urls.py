from rest_framework import routers
from .views import ShiftsViewSet, DateViewSet, MondayViewSet, TuesdayViewSet, WednesdayViewSet, ThursdayViewSet, FridayViewSet, SaturdayViewSet, SundayViewSet

router = routers.SimpleRouter()

router.register(r'shifts', ShiftsViewSet, basename="shifts")
router.register(r'dates', DateViewSet, basename="dates")

router.register(r'monday', MondayViewSet, basename="monday")
router.register(r'tuesday', TuesdayViewSet, basename="tuesday")
router.register(r'wednesday', WednesdayViewSet, basename="wednesday")
router.register(r'thursday', ThursdayViewSet, basename="thursday")
router.register(r'friday', FridayViewSet, basename="friday")
router.register(r'saturday', SaturdayViewSet, basename="saturday")
router.register(r'sunday', SundayViewSet, basename="sunday")

# router.register(r'add', AddScheduleViewSet, basename="add")
# router.register(r'delete', DeleteScheduleViewSet, basename="delete")
# router.register(r'update', UpdateScheduleViewSet, basename="update")


# Insert more routes here as needed

urlpatterns = [
]

urlpatterns += router.urls