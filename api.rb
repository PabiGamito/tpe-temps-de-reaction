require 'sinatra'
require 'json'
require 'active_record'

#Establish connection with Mysql database
ActiveRecord::Base.establish_connection( 
 :adapter => "mysql2",
 :host => "localhost",
 :username=>"root",
 :password=>"mouse16081999",
 :database => "tpe"
)
class Visual < ActiveRecord::Base
	#sex TEXT, time FLOAT, tries INT, age INT
end
class Audio < ActiveRecord::Base
	#sex TEXT, time FLOAT, tries INT, age INT
end

get '/visuel-stats' do
  content_type :json
  [
  Visual.where(:time => 50..100).count,
  Visual.where(:time => 101..150).count,
  Visual.where(:time => 151..200).count,
  Visual.where(:time => 201..250).count,
  Visual.where(:time => 251..300).count,
  Visual.where(:time => 301..350).count,
  Visual.where(:time => 351..400).count,
  Visual.where(:time => 401..450).count,
  Visual.where(:time => 451..500).count,
  Visual.where(:time => 501..550).count,
  Visual.where(:time => 551..600).count,
  Visual.where(:time => 601..650).count,
  Visual.where(:time => 651..700).count,
  Visual.where(:time => 701..750).count,
  Visual.where(:time => 751..800).count,
  Visual.where(:time => 801..850).count,
  Visual.where(:time => 851..900).count
  ].to_json
end

get '/audio-stats' do
  content_type :json
  [
  Audio.where(:time => 50..100).count,
  Audio.where(:time => 101..150).count,
  Audio.where(:time => 151..200).count,
  Audio.where(:time => 201..250).count,
  Audio.where(:time => 251..300).count,
  Audio.where(:time => 301..350).count,
  Audio.where(:time => 351..400).count,
  Audio.where(:time => 401..450).count,
  Audio.where(:time => 451..500).count,
  Audio.where(:time => 501..550).count,
  Audio.where(:time => 551..600).count,
  Audio.where(:time => 601..650).count,
  Audio.where(:time => 651..700).count,
  Audio.where(:time => 701..750).count,
  Audio.where(:time => 751..800).count,
  Audio.where(:time => 801..850).count,
  Audio.where(:time => 851..900).count
  ].to_json
end

post '/visuel-submit' do
	puts "New data for Visual Table"
  Visual.create(
  	sex: params[:sex],
  	time: params[:time],
  	tries: params[:tries],
  	age: params[:age]
  )
end

post '/audio-submit' do
	puts "New data for Audio Table"
  Audio.create(
  	sex: params[:sex],
  	time: params[:time],
  	tries: params[:tries],
  	age: params[:age]
  )
end