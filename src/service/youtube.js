class Youtube {
    constructor(key) {
        this.key = key;
        this.requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
    }

    mostPopular() {
          return fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&key=${this.key}`
          , this.requestOptions)
            .then(response => response.json())
            .then(result => result.items)
            .catch(error => console.log('error', error));
    }

    search(query) {
        return fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResult=25&q=${query}&type=video&key=${this.key}`
        , this,this.requestOptions)
            .then(response => response.json())
            .then(result => result.items.map(item => ({...item, id: item.id.videoId})))
            .catch(error => console.log('error', error));
    }
}

export default Youtube