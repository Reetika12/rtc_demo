import AgoraRTM from "agora-rtm-sdk";

export default class RTMClient {
  constructor() {
    super();
    this.channel = "";
    this.loggedIn = false;
    this.client = null;
  }

  init(appId) {
    this.client = AgoraRTM.createInstance(appId);
  }
}