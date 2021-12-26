import axios from 'axios';

class Youtube {
    constructor(httpClient) {
       this.youtube = httpClient;
    }

    async mostPopular() {
        const response = await this.youtube.get('videos',
        {
            params: {
                part: 'snippet',
                chart: 'mostPopular',
                maxLength: 25,
            }
        })

        return response.data.items
    }

    async search(query) {
        const response = await this.youtube.get('search', {
            params: {
                part: 'snippet',
                maxResult: 25,
                q: query,
                type: 'video',
            }
        });
        
        return response.data.items.map(item => ({ ...item, id: item.id.videoId }));
    }
}

export default Youtube