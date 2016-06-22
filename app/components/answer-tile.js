import Ember from 'ember';

export default Ember.Component.extend({
  favoritesList: Ember.inject.service(),

  actions: {
    addToFavorite(item) {
      console.log(item);
      this.get('favoritesList').add(item);

    }
  }
});
