from rest_framework import viewsets
from .models import Delivery
from .serializers import DeliverySerializer
from .filters import DeliveryFilter
from django_filters.rest_framework import DjangoFilterBackend


class DeliveryViewSet(viewsets.ModelViewSet):
    queryset = Delivery.objects.all().order_by('-departure_time')
    serializer_class = DeliverySerializer
    filter_backends = [DjangoFilterBackend]
    filterset_class = DeliveryFilter
