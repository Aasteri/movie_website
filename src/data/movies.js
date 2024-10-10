const movies = [
  {
      "id": "1",
      "title": "Big Buck Bunny",
        "thumbnail": "https://wallpapers.com/images/featured/movie-background-4saldhgir0h87q13.jpg",
      "duration": "8:18",
      "uploadTime": "May 9, 2011",
      "views": "24,969,123",
      "author": "Vlc Media Player",
      "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      "description": "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
      "subscriber": "25254545 Subscribers",
      "isLive": true
  },
  {
      "id": "2",
      "title": "The first Blender Open Movie from 2006",
      "thumbnail": "https://png.pngtree.com/thumb_back/fh260/background/20191113/pngtree-film-film-stage-blue-glitter-movie-background-image_322039.jpg",
      "duration": "12:18",
      "uploadTime": "May 9, 2011",
      "views": "24,969,123",
      "author": "Blender Inc.",
      "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      "description": "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
      "subscriber": "25254545 Subscribers",
      "isLive": true
  },
  {
      "id": "3",
      "title": "For Bigger Blazes",
      "thumbnail": "https://www.shutterstock.com/image-vector/empty-podium-curtain-on-background-600nw-2241544551.jpg",
      "duration": "8:18",
      "uploadTime": "May 9, 2011",
      "views": "24,969,123",
      "author": "T-Series Regional",
      "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      "description": "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
      "subscriber": "25254545 Subscribers",
      "isLive": true
  },
  {
      "id": "4",
      "title": "For Bigger Escape",
      "thumbnail": "https://img.freepik.com/free-photo/movie-background-collage_23-2149876003.jpg",
      "duration": "8:18",
      "uploadTime": "May 9, 2011",
      "views": "24,969,123",
      "author": "T-Series Regional",
      "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      "description": " Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
      "subscriber": "25254545 Subscribers",
      "isLive": false
  },
  {
      "id": "5",
      "title": "Big Buck Bunny",
      "thumbnail": "https://img.freepik.com/free-photo/movie-background-collage_23-2149876003.jpg",
      "duration": "8:18",
      "uploadTime": "May 9, 2011",
      "views": "24,969,123",
      "author": "Vlc Media Player",
      "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      "description": "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
      "subscriber": "25254545 Subscribers",
      "isLive": true
  },
  {
      "id": "6",
      "title": "For Bigger Blazes",
      "thumbnail": "https://t3.ftcdn.net/jpg/05/59/63/80/360_F_559638079_67T7se5qaAPcU2weC3Dd9EzC2dpQU8sz.jpg",
      "duration": "8:18",
      "uploadTime": "May 9, 2011",
      "views": "24,969,123",
      "author": "T-Series Regional",
      "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      "description": "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
      "subscriber": "25254545 Subscribers",
      "isLive": false
  },
  {
      "id": "7",
      "title": "For Bigger Escape",
      "thumbnail": "https://wallpapers.com/images/featured/movie-background-4saldhgir0h87q13.jpg",
      "duration": "8:18",
      "uploadTime": "May 9, 2011",
      "views": "24,969,123",
      "author": "T-Series Regional",
      "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      "description": " Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
      "subscriber": "25254545 Subscribers",
      "isLive": true
  },
  {
      "id": "8",
      "title": "The first Blender Open Movie from 2006",
      "thumbnail": "https://png.pngtree.com/thumb_back/fh260/background/20191113/pngtree-film-film-stage-blue-glitter-movie-background-image_322039.jpg",
      "duration": "12:18",
      "uploadTime": "May 9, 2011",
      "views": "24,969,123",
      "author": "Blender Inc.",
      "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      "description": "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
      "subscriber": "25254545 Subscribers",
      "isLive": false
  }
]
  
  export default movies;
  