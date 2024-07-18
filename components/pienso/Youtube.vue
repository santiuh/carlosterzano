<template>
    <div>
      <ul class="flex flex-col xl:flex-row gap-[75px] justify-around w-full max-w-[1440px]" v-if="videos.length">
        <li v-for="video in videos" :key="video.id.videoId">
          <div class="flex rounded-3xl overflow-hidden relative ">
            <iframe
              :src="`https://www.youtube.com/embed/${video.id.videoId}`"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              width="375"
              height="329"
            ></iframe>


          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        videos: [],
        apiKey: 'AIzaSyC9mzQZPU4IbQ4lyH1bjEu0S6D5KkyfYQ4',  
        channelId: 'UC8LXGbu7wYcu1s6Mu9mC-Ag',  
        maxResults: 3,
        playingVideoId: null,

      };
    },
    async mounted() {
      await this.fetchLatestVideos();
    },
    methods: {
      async fetchLatestVideos() {
        const url = `https://www.googleapis.com/youtube/v3/search?key=${this.apiKey}&channelId=${this.channelId}&part=snippet,id&order=date&maxResults=${this.maxResults}`;
  
        try {
          const response = await fetch(url);
          const data = await response.json();
          this.videos = data.items;
        } catch (error) {
          console.error('Failed to fetch videos:', error);
        }
      },
      formatDate(dateString) {
  const date = new Date(dateString);
  const month = date.toLocaleString('es-ES', { month: 'long' }).toUpperCase();
  const day = date.getDate();
  return `${month} ${day}`;
},
playVideo(videoId) {
      this.playingVideoId = videoId;
    },

    }
  };
  </script>
    
  <style scoped>
  .video-title {
    font-weight: bold;
    margin-top: 10px;
  }
  
  .video-date {
    color: grey;
    text-transform: uppercase;
    margin-top: 5px;
  }
  </style>
  