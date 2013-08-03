from django.conf.urls import patterns, url

urlpatterns = patterns(
	'angelesdepiedraDuranjo.apps.homepage.views',
	url(r'^$', 'index', name="homepageindex"),
)
