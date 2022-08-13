from django import forms

from django.contrib.auth import login, authenticate
from django.contrib.auth.models import User
from django.contrib.auth.forms import AuthenticationForm


class AddUser(forms.ModelForm):
    class Meta:
        model = User
        fields = ["username", "password1", "password2"]

    username = forms.CharField(
        label="username",
        max_length=50,
        required=True,
        widget=forms.TextInput(attrs={'class': 'form-control'})
    )
    password1 = forms.CharField(
        label="password",
        widget=forms.PasswordInput(attrs={'class': 'form-control'}),
        required=True
    )
    password2 = forms.CharField(
        label="password confirmation",
        widget=forms.PasswordInput(attrs={'class': 'form-control'}),
        required=True
    )


class CustomLoginForm(AuthenticationForm):

    def __init__(self, *args, **kwargs):
        # initialize parent class to be able to access parent class fields properties
        super().__init__(*args, **kwargs)

        # change username input style and label
        self.fields["username"].widget.attrs.update(
            {'class': 'form-control'}
        )
        self.fields["username"].label = "username"

        # change password input style and label
        self.fields['password'].widget.attrs.update(
            {'class': 'form-control'}
        )
        self.fields["password"].label = "password"
