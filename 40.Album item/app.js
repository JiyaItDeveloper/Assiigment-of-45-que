//Q:40
function album_list(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = album_list('Artist 1', 'Album Title 1');
console.log(album1);
var album2 = album_list('Artist 2', 'Album Title 2');
console.log(album2);
var album3 = album_list('Artist 3', 'Album Title 3', 12);
console.log(album3);
