from django.db import models


class VehicleModel(models.Model):
    model_name = models.CharField(max_length=100)

    def __str__(self):
        return self.model_name


class PackagingType(models.Model):
    packaging_name = models.CharField(max_length=100)

    def __str__(self):
        return self.packaging_name


class DeliveryService(models.Model):
    service_name = models.CharField(max_length=100)

    def __str__(self):
        return self.service_name


class DeliveryStatus(models.Model):
    status_name = models.CharField(max_length=100)

    def __str__(self):
        return self.status_name


class Delivery(models.Model):
    vehicle_model = models.ForeignKey(VehicleModel, on_delete=models.SET_NULL, null=True)
    vehicle_number = models.CharField(max_length=20)
    departure_time = models.DateTimeField()
    arrival_time = models.DateTimeField()
    distance_km = models.DecimalField(max_digits=6, decimal_places=2)
    services = models.ManyToManyField(DeliveryService)
    status = models.ForeignKey(DeliveryStatus, on_delete=models.SET_NULL, null=True)
    packaging = models.ForeignKey(PackagingType, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return f"{self.vehicle_model} {self.vehicle_number}"
