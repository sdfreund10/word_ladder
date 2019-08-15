class Cache
  CACHE_LIFETIME = 30
  @value : Hash(Array(String), Array(Array(String)))
  @last_refreshed_at : Int64

  def initialize
    @value = Hash(Array(String), Array(Array(String))).new
    @last_refreshed_at = Time.now.to_unix
  end

  def pull(key)
    if @value.has_key?(key)
      @value[key]
    else
      @value[key] = yield
    end
  end

  def clear
    @value.keys.each { |key| @value.delete(key) }
    @last_refreshed_at = Time.now.to_unix
  end

  def expired?
    (Time.now.to_unix - @last_refreshed_at) > CACHE_LIFETIME
  end
end

