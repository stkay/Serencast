push:
	git push -u origin master

icon:
	convert public/images/favicon.png -define icon:auto-resize public/images/favicon.ico

program:
	coffee -c -b public/javascripts/gear.coffee
