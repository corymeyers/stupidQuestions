import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  corpse: DS.attr(),
  question: DS.attr()
});
