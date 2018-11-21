from django import forms
from django.forms import ModelForm
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError
from .models import Profile


class registerForm(UserCreationForm):

	class Meta:
		model = User
		fields=('username','password1','password2')

		def clean_username(self):
			username = self.cleaned_data['username'].lower()
			r = User.objects.filter(username=username)
			if r.count():
				raise  ValidationError("Username already exists")
			return username

		def clean_password2(self):
			password1 = self.cleaned_data.get('password1')
			password2 = self.cleaned_data.get('password2')
			if password1 and password2 and password1 != password2:
				raise ValidationError("Passwords don't match")
			return password2

class ProfileForm(ModelForm):

	class Meta:
		model = Profile
		fields=('username','score')