import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,

  fullQuestion: Ember.computed('question.head', 'question.author', function() {
    return this.get('question.head') + ' Original question asked by ' + this.get('question.author');
  }),

  actions: {
    update(question, params) {
      this.sendAction('update', question, params);
    }
  }
});
