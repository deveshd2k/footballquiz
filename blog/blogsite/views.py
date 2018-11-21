from django.shortcuts import render
from django.contrib.auth import authenticate, login,logout
from django import forms
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.http import HttpResponse,HttpResponseRedirect
from django.contrib.auth.forms import UserCreationForm
from .forms import registerForm,ProfileForm
from .models import Profile
# Create your views here.

def index(request):
	return render(request,'index.html')

def register(request):
	if request.method == 'POST':
		form = registerForm(request.POST)
		form1 = ProfileForm(request.POST)
		if form.is_valid():
			username = form.cleaned_data.get('username')
			raw_password = form.cleaned_data.get('password1')
			form.save()
			form1.username = username
			form1.save()
			user = authenticate(username=username,password=raw_password)
			login(request,user)
			return HttpResponseRedirect('login')
	else:
		form = UserCreationForm()
	return render(request,'register.html',{'form':form})

@login_required(login_url='/login/')
@csrf_exempt
def kickoff(request):
	if request.method == 'POST':
		scores = request.POST.get('scores')
		username = None
		if request.user.is_authenticated:
			username = request.user.username
		instance = Profile.objects.get(username=username)
		instance.score = scores
		instance.save()
	for instance in Profile.objects.filter(username=request.user.username):	
		score = instance.score
	return render(request,'quiz.html',{'score':score})

@login_required(login_url='/login/')
def user_logout(request):
	if request.method =='POST':
		logout(request)
		return HttpResponseRedirect('/quiz/')

@login_required(login_url='/login/')
def questions(request):
	return render(request,'Questions.html')