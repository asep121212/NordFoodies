import NotificationHelper from './notification-helper';
import API_ENDPOINT from '../globals/api-endpoint';

const WebSocketInitiator = {
  init(url) {
    const webSocket = new WebSocket(url);
    webSocket.onmessage = this._onMessageHandler;
  },

  _onMessageHandler(message) {
    const restaurant = JSON.parse(message.data);
    
    NotificationHelper.sendNotification({
      title: `${restaurant.title} is on cinema!`,
      options: {
        body: restaurant.overview,
        image: `${API_ENDPOINT.IMAGE.LARGE(restaurant.pictureId)}`,
      },
    });
  },
};

export default WebSocketInitiator;
