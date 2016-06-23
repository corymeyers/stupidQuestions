import Ember from 'ember';

export default Ember.Component.extend({
  favoriteAnswers: Ember.inject.service(),

  actions: {
    addToFavorite(item) {
      console.log(item);
      this.get('favoriteAnswers').add(item);

    }
  }
});
