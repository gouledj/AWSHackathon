import tweepy
import json

# Twitter API credentials
API_KEY = 'MN4UX6RY8tMM89LGbWzHm6qfb'
API_SECRET_KEY = 'DPx9ZYPxbRtlUdxiTlmOAG3eaPMHfZboesD0aT7cyD5EB7MhAx'
ACCESS_TOKEN = '1329649470951178241-aa38tNmpiZM1f69OkQ0KJ3OX5rmPIQ'
ACCESS_TOKEN_SECRET = 'VmMhyqEXpt7TF2gwW6ynpO9etnKHVY0DIenQaiayaL0DM'

# Authenticate to Twitter
auth = tweepy.OAuthHandler(API_KEY, API_SECRET_KEY)
auth.set_access_token(ACCESS_TOKEN, ACCESS_TOKEN_SECRET)
api = tweepy.API(auth)

# Define search query
query = 'wildfire Alberta OR fire Alberta'
max_tweets = 100  # Maximum number of tweets to fetch

# Fetch tweets
tweets = tweepy.Cursor(api.search_tweets, q=query, lang='en', tweet_mode='extended').items(max_tweets)

# Prepare a list to hold the parsed data
data = []

# Extract information from each tweet
for tweet in tweets:
    created_at = tweet.created_at
    text = tweet.full_text
    user = tweet.user.screen_name

    # Append the extracted information to the data list
    data.append({
        'date_time': created_at.strftime('%Y-%m-%d %H:%M:%S'),
        'user': user,
        'message': text
    })

# Print the extracted data
print(data)

# Convert the data list to JSON
json_data = json.dumps(data, indent=4)

# Save the JSON data to a file
with open('twitter_wildfire_updates.json', 'w') as json_file:
    json_file.write(json_data)

print("Twitter scraping completed and data saved to 'twitter_wildfire_updates.json'")
