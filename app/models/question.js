import DS from 'ember-data';

export default DS.Model.extend({
  head: DS.attr(),
  author: DS.attr(),
  detail: DS.attr()
});
