#!/usr/local/bin/python
# -*- coding: utf-8 -*-
from django.shortcuts import render_to_response
from angelesdepiedraDuranjo.apps.homepage.forms import *
from django.template import RequestContext
from django.core.mail import send_mail
from zinnia.models import Entry


def index(request):
	success = False
	entradas= Entry.objects.order_by('-creation_date')
	entradas= entradas[:3]
	if request.method == 'POST':
		form = contactForm(request.POST)
		if form.is_valid():
			success = True
			cd = form.cleaned_data
			asunto = u'Por: %s mail: %s Tipo de servicio: %s Plan: %s' % (cd['nombre'], cd['email'], cd['tipoServicio'], cd['planes'])
			content = u'Email contacto: %s \nAsunto: %s \nTelefono: %s \nDescripcion: %s' % (cd['email'], asunto, cd['telefono'], cd['texto'])
			send_mail(asunto, content, cd['email'], ['info@duranjo.com'])
	else:
		form = contactForm()
	ctx = {'form': form, 'success': success, 'entradas':entradas}
	return render_to_response('homepage/index.html',ctx, context_instance=RequestContext(request))