import django_filters
from .models import Delivery, DeliveryService


class DeliveryFilter(django_filters.FilterSet):
    arrival_date = django_filters.DateFromToRangeFilter(field_name='arrival_time')
    services = django_filters.ModelMultipleChoiceFilter(
        field_name='services',
        queryset=DeliveryService.objects.all(),
    )

    class Meta:
        model = Delivery
        fields = ['arrival_date', 'services']
