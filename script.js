var player  = document.querySelector('#player');
var btn_play    = document.querySelector('.play');
var btn_playpause    = document.querySelector('.playpause');
var btn_pause   = document.querySelector('.pause');
var btn_mute    = document.querySelector('.mute');
var container = document.querySelector('.my-player');
var seek_container = document.querySelector('.seekbar-container');
var seek_percent = document.querySelector('.seekbar-container div');

var seekbar = document.querySelector('.seekbar');
var current = document.querySelector('.current');
var duration = document.querySelector('.duration');

var total_duration = 0;
player.addEventListener( 'loadedmetadata', function(){
    total_duration = player.duration;
    duration.innerHTML = parseInt( total_duration );
} );

document.addEventListener('keydown', function( event ){
    console.log(event.which );
    if(event.keyCode == 39){
        event.preventDefault();
        player.currentTime = player.currentTime + 5;
    }
})

function togglePlay(){
    if( player.paused ){
        player.play();
    }else{
        player.pause();
    }
}

seek_container.addEventListener('click', function( event ){
    var rect = seek_container.getBoundingClientRect();
    var click_point = event.pageX - rect.left;
    var nesbat = click_point / rect.width;
    if( nesbat < 0 ){
        nesbat = 0;
    }else if( nesbat > 1 ){
        nesbat = 1;
    }
    player.currentTime = nesbat * player.duration;
});

player.addEventListener('timeupdate', function(){
    //console.log( player.currentTime );
    current.innerHTML = parseInt( player.currentTime );
    var percent = parseInt( player.currentTime / player.duration * 100 )
    seekbar.innerHTML = percent + '%';
    seek_percent.style.width = ( player.currentTime / player.duration * 100 ) + '%'
})

btn_play.addEventListener( 'click', function(){
    player.play();
} );

player.addEventListener('ended', function(){
    player.currentTime = 0;
    player.play();
})

player.addEventListener('play', function(){
    console.log('play')
    container.classList.add('playing');
});

player.addEventListener('pause', function(){
    console.log('pause')
    container.classList.remove('playing');
});

btn_pause.addEventListener( 'click', function(){
    player.pause();
} );

// btn_playpause.addEventListener( 'click', function(){
//     if( player.paused ){
//         player.play();
//         btn_playpause.innerHTML = 'pause';
//     }else{
//         player.pause();
//         btn_playpause.innerHTML = 'play';
//     }
// } );



btn_mute.addEventListener( 'click', function(){
    player.muted = ! player.muted;
    // if( player.muted ){
    //     player.muted = false;
    // }else{
    //     player.muted = true;
    // }
} );
function my_work(){
    confirm('how Are you')
    prompt('hello')
}
console.log("ok git");

console.log( 'this second commit for js file' );