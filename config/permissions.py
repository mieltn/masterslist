from rest_framework.permissions import BasePermission


class IsAuthOrCreate(BasePermission):
    def has_permission(self, request, view):
        if (request.method == 'GET' and not request.user.is_authenticated):
            return False
        return True
        