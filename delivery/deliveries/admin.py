from django.contrib import admin

from .models import *

admin.site.register(VehicleModel)
admin.site.register(PackagingType)
admin.site.register(DeliveryService)
admin.site.register(DeliveryStatus)
admin.site.register(Delivery)
