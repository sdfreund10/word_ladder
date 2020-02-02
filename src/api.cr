require "./word_ladder"
require "./web_util/cache"
require "./web_util/word_validator"
require "kemal"
require "json"

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

  validator = WordValidator.new(query_params)

  if !validator.valid
    response.status_code = validator.status_code
    next(validator.message)
  end
    
  start_word = query_params["start"]
  end_word = query_params["end"]
  cache_key = [start_word, end_word]

  paths = CACHE.pull(cache_key) do
    WordLadder::PathFinder.new(start_word, end_word).paths
  end

  if paths.empty?
    response.status_code = 400
    "No valid path between words"
  else
    paths.to_json
  end
end

ENV["PORT"] ||= "4000"
Kemal.config.port = ENV["PORT"].to_i
Kemal.run

