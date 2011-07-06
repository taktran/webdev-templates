require 'rubygems'
require 'sinatra'
require 'haml'
require 'sass'

get '/' do
  haml :index
end

get '/:page' do
  # Load the file in the url
  haml params[:page].intern
end

get '/stylesheets/:stylesheet.css' do
  scss params[:stylesheet].intern
end