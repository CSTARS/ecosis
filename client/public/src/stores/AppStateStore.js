const {AppStateStore} = require('@ucd-lib/cork-app-state');

class ImplAppStateStore extends AppStateStore {

  constructor() {
    super();

    this.data.selectedRecord = null;
    this.data.selectedRecordMedia = null;

    this.events.SELECTED_RECORD_UPDATE = 'selected-record-update';
    this.events.SELECTED_RECORD_MEDIA_UPDATE = 'selected-record-media-update';
  }


}

module.exports = new ImplAppStateStore();