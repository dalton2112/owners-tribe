import { computed, ref } from 'vue'

export function useYoutubeChannel() {
  const videos = ref([])
  const loading = ref(false)
  const error = ref(null)
  const nextPageToken = ref(null)
  const uploadsPlaylistId = ref(null)

  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY
  const BASE_URL = 'https://www.googleapis.com/youtube/v3'

  const fetchUploadsPlaylistId = async (channelId) => {
    const params = new URLSearchParams({
      part: 'contentDetails',
      id: channelId,
      key: API_KEY
    })
    const url = `${BASE_URL}/channels?${params}`
    const res = await fetch(url)
    if (!res.ok) throw new Error('Failed to fetch channel details')

    const data = await res.json()
    if (!data.items || data.items.length === 0) throw new Error('Channel not found')
    console.log('url', url)
    return data.items[0].contentDetails.relatedPlaylists.uploads
  }

  const fetchVideos = async (channelId, loadMore = false) => {
    if (loading.value || (loadMore && !nextPageToken.value)) return

    loading.value = true
    error.value = null

    try {
      if (!API_KEY) throw new Error('YouTube API key is not configured')
      if (!channelId) throw new Error('YouTube channel ID is not configured')

      if (!uploadsPlaylistId.value) {
        uploadsPlaylistId.value = await fetchUploadsPlaylistId(channelId)
      }

      const params = new URLSearchParams({
        part: 'snippet',
        playlistId: uploadsPlaylistId.value,
        maxResults: '12',
        key: API_KEY
      })
      if (loadMore) params.set('pageToken', nextPageToken.value)

      const res = await fetch(`${BASE_URL}/playlistItems?${params}`)
      if (!res.ok) throw new Error('Failed to fetch videos')
      console.log('res', res)
      const data = await res.json()
      const newVideos = (data.items || [])
        .map((item) => {
          const snippet = item.snippet
          const id = snippet?.resourceId?.videoId
          if (!id) return null

          return {
            id,
            title: snippet.title,
            description: snippet.description,
            thumbnail: snippet.thumbnails?.medium?.url || snippet.thumbnails?.default?.url,
            publishedAt: new Date(snippet.publishedAt).toLocaleDateString()
          }
        })
        .filter(Boolean)

      if (loadMore) {
        videos.value = [...videos.value, ...newVideos]
      } else {
        videos.value = newVideos
      }

      nextPageToken.value = data.nextPageToken || null
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to fetch YouTube videos'
    } finally {
      loading.value = false
    }
  }

  return {
    videos,
    loading,
    error,
    hasMore: computed(() => Boolean(nextPageToken.value)),
    fetchVideos
  }
}
