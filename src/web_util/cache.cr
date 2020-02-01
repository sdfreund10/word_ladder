class Cache
  CACHE_LIFETIME = 60 * 60 * 24 # 1 day
  @value : Hash(Array(String), Array(Array(String)))
  @last_refreshed_at : Int64

  def initialize
    @value = Hash(Array(String), Array(Array(String))).new
    @last_refreshed_at = Time.utc.to_unix
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
    @last_refreshed_at = Time.utc.to_unix
  end

  def expired?
    (Time.utc.to_unix - @last_refreshed_at) > CACHE_LIFETIME
  end
end

