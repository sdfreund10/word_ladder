class WordValidator
  getter valid, message, status_code

  @start_word : String
  @end_word : String

  def initialize(params : HTTP::Params)
    @params = params
    @start_word = params.fetch("start", "").downcase
    @end_word = params.fetch("end", "").downcase
    @valid = true
    @status_code = 200
    @message = ""
    validate
  end

  private def validate
    return unless words_present
    return unless valid_words
    return unless same_length
  end

  private def words_present
    if !@params.has_key?("start") || !@params.has_key?("end")
      @message = "Missing arguments"
      @status_code = 406
      @valid = false
    else
      true
    end
  end

  private def valid_words
    start_word_valid = WordLadder::Dictionary.includes?(@start_word)
    end_word_valid = WordLadder::Dictionary.includes?(@end_word)

    unless start_word_valid && end_word_valid
      @message = "Invalid words"
      @status_code = 406
      @valid = false
    else
      true
    end
  end

  private def same_length
    if @start_word.size != @end_word.size
      @message = "Words are not same length"
      @status_code = 406
      @valid = false
    else
      true
    end
  end
end
