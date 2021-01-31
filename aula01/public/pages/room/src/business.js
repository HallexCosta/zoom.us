class Business {
  constructor({ room, media, view, socketBuilder }) {
    Object.assign(this, { room, media, view, socketBuilder });

    this.socketBuilder
      .setOnUserConnected(this.onUserConnected())
      .setOnUserDisconnected(this.onUserDisconnected())
      .build()
      .emit('join-room', this.room, 'test01')
      
    this.currentStream = {}
  }

  static initialize(deps) {
    const instance = new Business(deps)
    return instance._init()
  }

  async _init() {
    this.currentStream = await this.media.getCamera()
    this.addVideoStream('test01')
  }
  
  addVideoStream(userId, stream = this.currentStream) {
    const isCurrentId = false
    this.view.renderVideo({
      userId,
      stream, 
      isCurrentId
    })
  }

  onUserConnected = function() {
    return userId => {
      console.log('User connected!', userId)
    }
  }

  onUserDisconnected = function() {
    return userId => {
      console.log('User disconnected!', userId)
    }
  }
}