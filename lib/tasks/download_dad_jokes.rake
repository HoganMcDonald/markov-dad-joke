require 'net/http'

namespace :jokes do
  desc 'Fetches jokes from https://icanhazdadjoke.com and stores in db.'
  task download: :environment do
    @last_page = 999
    def fetch_jokes previous_page=0
      unless previous_page >= @last_page
        uri = URI("https://icanhazdadjoke.com/search?limit=30&page=#{previous_page + 1}")
        http = Net::HTTP.new(uri.host, uri.port)
        http.use_ssl = true
        request = Net::HTTP::Get.new(uri.request_uri)
        request["Accept"] = "application/json"
        response = http.request(request)
        
        body = JSON.parse response.body
        @last_page = body["total_pages"]
        
        puts "downloading page #{body["current_page"]} of #{@last_page}"

        for joke in body["results"]
          SourceJoke.create(joke: joke["joke"])
        end

        fetch_jokes body["current_page"]
      end
    end   
    fetch_jokes 
    puts 'done'
  end
end
