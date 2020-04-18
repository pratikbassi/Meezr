require 'faraday'
require 'faraday_middleware'

# Stretch option - should handle when there is no network connection. 

module Middleware
  class Exceptions < Faraday::Middleware
    def call(env)
      begin
        @app.call(env)
      rescue Faraday::Error::ConnectionFailed => e
        puts "Message from middleware"
        # url = env[:url].to_s.gsub(env[:url].path, '')
        # $stderr.puts "The server at #{url} is either unavailable or is not currently accepting requests. Please try again in a few minutes."
      end
    end
  end
end