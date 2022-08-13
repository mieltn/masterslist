from django import forms
from .models import Programm, Country, Subject

COUNTRIES = Country.objects.all()
SUBJECTS = Subject.objects.all()

class AddProgramm(forms.ModelForm):
    class Meta:
        model = Programm
        fields = ["name", "university", "country", "subject", "duration", "webpage", "other"]

    name = forms.CharField(
        label="name",
        max_length=100,
        required=True,
        widget=forms.TextInput(attrs={'class': 'form-control'})
    )
    university = forms.CharField(
        label="university",
        max_length=100,
        required=True,
        widget=forms.TextInput(attrs={'class': 'form-control'})
    )
    country = forms.ModelChoiceField(
        label="country",
        queryset=COUNTRIES,
        required=True,
        widget=forms.Select(attrs={'class': 'form-select'})
    )
    subject = forms.ModelChoiceField(
        label="subject",
        queryset=SUBJECTS,
        required=True,
        widget=forms.Select(attrs={'class': 'form-select'})
    )
    duration = forms.CharField(
        label="duration",
        max_length=10,
        required=True,
        widget=forms.TextInput(attrs={'class': 'form-control'})
    )
    webpage = forms.CharField(
        label="webpage",
        max_length=100,
        required=True,
        widget=forms.TextInput(attrs={'class': 'form-control'})
    )
    other = forms.CharField(
        label="other",
        widget=forms.Textarea(attrs={'class': 'form-control'}),
        max_length=300,
        required=False
    )
