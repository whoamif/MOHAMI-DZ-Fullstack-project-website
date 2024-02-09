from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .serializers import UserSerializer  # Make sure to import your UserSerializer

@api_view(['GET'])
@authentication_classes([SessionAuthentication, TokenAuthentication])
@permission_classes([IsAuthenticated])
def getCurrentAvocat(request):
    current_user = request.user
    user_serializer = UserSerializer(current_user)  # Use the serializer directly on the user object
    return Response({'user': user_serializer.data})


