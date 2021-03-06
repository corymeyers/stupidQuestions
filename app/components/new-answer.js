import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },

    save1() {
      var params = {
        author: this.get('author'),
        corpse: this.get('corpse'),
        question: this.get('question')
      };
      this.set('addNewAnswer', false);
      this.sendAction('save2', params);
    }
  }
});
