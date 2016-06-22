import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },
    saveQ() {
      var params = {
        head: this.get('head'),
        author: this.get('author'),
        detail: this.get('detail')
    };
      this.set('addNewQuestion', false);
      this.sendAction('saveQ', params);
    }
  }
});
