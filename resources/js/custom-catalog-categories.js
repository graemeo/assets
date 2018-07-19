// Add Go to the Languages category
var category = _.find(window.OPENSHIFT_CONSTANTS.CATALOG_CATEGORIES,
{ id: 'languages' });
category.items.splice(2,0,{ // Insert at the third spot
  // Required.  Must be unique
  id: "spring-boot",
  // Required
  label: "Spring Boot",
  // Optional.  If specified, defines a unique icon for this item
  iconClass: "icon-spring-boot",
  // Optional.  If specified, enables matching other tag values to this category
  // item
  categoryAliases: [
    "springboot",
    "spring"
  ]
});
