// 베스트 앨범
// https://programmers.co.kr/learn/courses/30/lessons/42579

function fetchData(genres, plays) {
    const musics = {};
    for(let i = 0; i < genres.length; i++){
        if(musics[genres[i]]){
            musics[genres[i]].all_plays += plays[i];
            musics[genres[i]].songs.push({ id: i, plays: plays[i]});
        }else{
            musics[genres[i]] = {
                all_plays: plays[i],
                songs: [{ id: i, plays: plays[i]}]
            }
        }
    }
    return Object.entries(musics).map((e) => e[1]);
}

function solution(genres, plays) {
    const result = [];
    const music_genres = fetchData(genres, plays);
    music_genres.sort((pre, post) => post.all_plays - pre.all_plays);
    
    music_genres.forEach((genres) => {
        const songs = genres.songs;
        songs.sort();
        const [first, second] = songs.sort((pre, post) => post.plays - pre.plays);
        if(first) {
            result.push(first.id);
        }
        if(second) {
            result.push(second.id);
        }
    })
    return result

}
