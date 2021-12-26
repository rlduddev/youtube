class Youtube {
    constructor(key) {
        this.key = key;
        this.requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
    }

    async mostPopular() {
          try {
            const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&key=${this.key}`,
                this.requestOptions);
            const result_1 = await response.json();
            return result_1.items;
        } catch (error) {
            return console.log('error', error);
        }
    }

    async search(query) {
        try {
            const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResult=25&q=${query}&type=video&key=${this.key}`,
                this, this.requestOptions);
            const result_1 = await response.json();
            return result_1.items.map(item => ({ ...item, id: item.id.videoId }));
        } catch (error) {
            return console.log('error', error);
        }
    }
}

export default Youtube