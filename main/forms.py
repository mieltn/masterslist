from django import forms
from .models import Programm, Country, Subject

COUNTRIES = Country.objects.all()
SUBJECTS = Subject.objects.all()

class AddProgramm(forms.ModelForm):
    class Meta:
        model = Programm
        fields = ["name", "university", "country", "subject", "duration", "webpage", "other"]
        # labels = {
        #     "name": "name",
        #     "university": "university",
        #     # "country": "country",
        #     "duration": "duration",
        #     "webpage": "webpage",
        #     "other": "other"
        # }

    name = forms.CharField(label="name", max_length=100, required=True)
    university = forms.CharField(label="university", max_length=100, required=True)
    country = forms.ModelChoiceField(label="country", queryset=COUNTRIES, required=True)
    subject = forms.ModelChoiceField(label="subject", queryset=SUBJECTS, required=True)
    duration = forms.CharField(label="duration", max_length=10, required=True)
    webpage = forms.CharField(label="webpage", max_length=100, required=True)
    other = forms.CharField(
        label="other",
        widget=forms.Textarea(
            attrs={
                'rows': 4,
                'cols': 25
            }
        ),
        max_length=200,
        required=False
    )
