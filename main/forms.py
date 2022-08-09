from django import forms

class AddProgramm(forms.Form):
    name = forms.CharField(label="Name", max_length=200)
    link = forms.CharField(label="Programm page", max_length=200, required=False)