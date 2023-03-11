# MoKo Tube - YouTube Clone App
> MoKo Tube is a web application inspired by YouTube,
>where users can browse and search for videos, channels, playlists, and view video details and channel statistics.
>The app uses the YouTube v3 API to fetch data from YouTube and offers various features.
>The app is fully responsive to provide a seamless viewing experience on all devices.

## Features
MoKo Tube is a YouTube clone app that offers several features for a seamless viewing experience. Some of the key features of the app include:

- **Video Viewing:** Users can browse and view videos from YouTube, including video details and channel statistics.

- **Recent Viewed:** The app provides a "recent viewed" section that allows users to quickly access previously viewed videos, powered by local storage.

- **Dark Mode:** The app offers a dark mode feature that enables users to switch between a light and dark theme.

- **Playlists:** Users can create, browse, and play YouTube playlists directly within the app.

- **Category Suggestion:** The app provides a horizontal scroll of suggested video categories, similar to YouTube's interface.

- **Channel Page:** Users can browse channels on YouTube, view channel details and statistics, including channel description, subscriber count, and video count.

- **Channel Statistics Page:** Users can view detailed channel statistics for a selected YouTube channel, including the number of views, likes, dislikes, and comments.

MoKo Tube is built using React.js and utilizes the YouTube v3 API to fetch data from YouTube. With these features, the app offers a user-friendly interface that mimics the functionality of YouTube.

## API Endpoints
|Endpoint Name|	Description|	Required Parameters|	Optional Parameters| 
| :---:   | :---: | :---: | :---: |
Suggested Videos|	Returns a list of suggested videos based on the user's activity and the activity of similar users.|	part, relatedToVideoId, type|	maxResults|
Search|	Lets users search for videos based on a query string.|	part, q|	regionCode, maxResults, order, pageToken|
Video Details|Returns details about a specific video.|	part, id|	N/A|
Channel Details|	Returns details about a specific YouTube channel.|	part, id|	N/A|
Channel Videos|	Returns a list of videos uploaded to a specific channel.|part, channelId	|	order, maxResults, pageToken|
Playlist Videos|	Returns a list of videos in a specific YouTube playlist.|part, playlistId	|	maxResults, pageToken|

The "Required Parameters" column lists the parameters that are required to make a request to each endpoint. For example, to make a request to the "Search" endpoint, you need to provide the "part" and "q" parameters.

The "Optional Parameters" column lists any additional parameters you can include in your request to customize the response. For example, you can include the "maxResults" parameter to limit the number of videos returned in the response.

## Getting Started
1. Open the terminal or command prompt on your computer.
2. Navigate to the directory where you want to store the cloned repository.
3. Run the following command to clone the repository:
```
git clone https://github.com/MohsinKokani/MoKoTube.git
```
4. Once the repository has been cloned, navigate to the project directory:
```
cd MoKoTube
```
5. Install the required dependencies using npm:
```
npm install
```
6. After the dependencies have been installed, you can start the local development server by running:
```
npm start
```
7. This will start the application and open it in your default browser. If the browser doesn't open automatically, you can access the application by going to http://localhost:3000/ in your browser.
8. That's it! You should now have a working copy of MoKo tube running locally on your computer.