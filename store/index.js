// STATE HANDLES THE DATA YOU WANT TO SAVE/SHARE
export const state = () => ({
    videos: []
})

// MUTATIONS ALTER STATE WHEN COMMITED OR CALLED JUST LIKE METHODS OR FUNCTIONS
export const mutations = {
    SET_VIDEOS(state, videos){
        state.videos = videos
    }
}