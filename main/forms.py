from django import forms
from .models import Programm

class AddProgramm(forms.ModelForm):
    class Meta:
        model = Programm
        fields = ["name", "university", "duration", "webpage"]
        labels = {
            "name": "name",
            "university": "university",
            "duration": "duration",
            "webpage": "webpage"
        }

    other = forms.CharField(label="other", max_length=200, required=False)
