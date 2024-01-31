class HandleVideosLink {

    getVideos() {
        const videos = {
            video1: {
                link: '../sample-videos/1.mp4',
                video_title: 'video1',
                version: 'free',
                poster_image: '../sample-image/1.png',
                total_views: 50,
                total_likes: 20,
                total_comments: 2,
                comments: {
                    john: {
                        email: 'john@example.com',
                        username: '@john',
                        message: 'nice video'
                    },
                    evans: {
                        email: 'murungaevans@example.com',
                        username: '@murungaevans',
                        message: 'nice video'
                    }
                }
            },

            video2: {
                link: '../sample-videos/2.mp4',
                video_title: 'video2',
                version: 'premium',
                poster_image: '../sample-image/2.png',
                total_views: 50,
                total_likes: 20,
                total_comments: 2,
                comments: {
                    john: {
                        email: 'john@example.com',
                        username: '@john',
                        message: 'nice video'
                    },
                    evans: {
                        email: 'kenflix@example.com',
                        username: '@netflix',
                        message: 'nice video'
                    }
                }
            }
        };

        return videos;
    }
}