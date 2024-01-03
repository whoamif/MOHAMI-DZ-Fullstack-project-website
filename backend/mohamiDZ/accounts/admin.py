from django.contrib import admin
from .models import UserAccount

admin.site.register(UserAccount)
admin.site.site_header = "DZ-Mouhami"
admin.site.site_title = "DZ-Mouhami"

from oauth2_provider.models import AccessToken, Application, Grant, RefreshToken, get_application_model

# ... (other code)

# Unregister the models
admin.site.unregister(AccessToken)
admin.site.unregister(Application)
admin.site.unregister(Grant)
admin.site.unregister(RefreshToken)
