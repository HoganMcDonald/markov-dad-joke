class MarkovChain
  def initialize jokes
    @words = Hash.new
    @jokes = jokes
    build_table
  end

  def build_table
    @jokes.each do |joke|
      words = joke.joke.split
      words.each_with_index do |word, i|
        add_word(word, words[i+1]) if i < words.size - 1
      end
    end
  end

  def add_word(word, next_word)
    @words[word] = Hash.new(0) unless @words[word].present?
    @words[word][next_word] += 1
  end

  def generate_joke prev_word=nil, joke=[]
    # First word of a randomly selected joke
    prev_word = @jokes.sample.joke.split[0] unless prev_word.present?

    # use random number between sum and 0 for 
    sum = @words[prev_word].reduce(0) {|sum, word| sum += word[1]}
    random = rand(sum)+1

    next_word = @words[prev_word].find do |word, count|
      sum -= count
      sum <= random
    end.first

    if [".", "!"].include? next_word[-1]
      joke << next_word
      return joke.join ' '
    else
      joke << next_word
      return generate_joke next_word, joke
    end
  end
end