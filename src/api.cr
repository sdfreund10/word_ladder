require "./word_ladder"
require "./web_util/cache"
require "kemal"

CACHE = Cache.new

get "/" do |request|
  send_file request, "public/index.html", "text/html"
end

before_get "/paths/new" do
  CACHE.clear if CACHE.expired?
end

get "/paths/new" do |request|
  query_params = request.params.query
  response = request.response
  response.content_type = "application/json"
  if query_params.has_key?("start") && query_params.has_key?("end")
    start_word = query_params["start"]
    end_word = query_params["end"]
    cache_key = [start_word, end_word]
    paths = CACHE.pull(cache_key) do
      WordLadder::PathFinder.new(start_word, end_word).paths
    end

    if paths.empty?
      puts "nothin found!"
      response.status_code = 406
      "No valid path between words"
    else
      puts "I found a thing!"
      paths.to_json
    end
  else
    response.status_code = 406
    "Invalid arguments"
  end
end

Kemal.config.port = 4000
Kemal.run

