# -*- coding: utf-8 -*-
# -*- ruby -*-

$:.unshift File.expand_path 'lib', File.dirname(__FILE__)

require 'rubygems'

require 'sinatra'
require 'sinatra/cross_origin'

# require 'getsbdata'
require 'getjson'
require 'getbookmarks'

enable :cross_origin

get '/:project' do |project|
  redirect "/#{project}/__bookmarks"
end

get '/:project/' do |project|
  redirect "/#{project}"
end

get '/:project/:page' do |project,page|
  @project = project
  @page = page
  erb :serencast
end

get '/:project/:page/json' do |project,page|
  getjson(project,page)
end

# get '/' do
#   redirect 'https://masui.github.io/Serencast/'
# end
# 
# get '/index.html' do
#   redirect 'https://masui.github.io/Serencast/'
# end

error do
  "Error!"
end
