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
            <div   v-show="playingVideoId !== video.id.videoId"
            @click="playVideo(video.id.videoId)"
             class="absolute xl:flex flex-col w-full bg-[url('/ctFondo.png')] h-full hidden pt-5 justify-between">
                <div class="flex flex-row self-center items-center border rounded-2xl px-2 bg-[#e9e9e950]">
                    <NuxtImg class="!h-[32px] !w-auto border-r-2 pr-2" src="/ctFecha.svg"></NuxtImg>
                    <div class="text-white  text-[32px] pl-2 "> {{ formatDate(video.snippet.publishedAt) }} </div>
                </div>
                    <div class="text-[27px] font-medium text-white w-full text-center" >{{ video.snippet.title }}</div>
            
                <div></div>
                
            </div>

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
  