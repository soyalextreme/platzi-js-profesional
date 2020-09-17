function MediaPlayer(config) {
  this.media = config.el;
  this.plugins = config.plugins || [];
  this._initPlugins();
}



MediaPlayer.prototype._initPlugins = function(){
  const player = {
    play: ()=>this.play(),
    pause: ()=> this.plus(),
    media: this.media,
    get muted(){
      return this.media.muted;
    },
    set muted(val){
      this.media.muted = val; 
    }
  }
  this.plugins.forEach(plugin=>{
    plugin.run(this);
  })
}

MediaPlayer.prototype.play = function() {
  this.media.play();
};

MediaPlayer.prototype.pause = function() {
  this.media.pause();
};

MediaPlayer.prototype.togglePlay = function() {
  if (this.media.paused) {
    this.play();
  } else {
    this.pause();
  }
};


MediaPlayer.prototype.changeMuteStatus = function(){
  this.media.muted = !this.media.muted;
}



MediaPlayer.prototype.mute = function(){
  this.media.muted = true;
}
  

export default MediaPlayer
