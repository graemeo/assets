(function() {
    // Add Go to the Languages category
    var category = _.find(window.OPENSHIFT_CONSTANTS.SERVICE_CATALOG_CATEGORIES,
    { id: 'languages' });
    category.subCategories.splice(2,0,{ // Insert at the third spot
      // Required.  Must be unique
      id: "spring-boot",
      // Required
      label: "Spring Boot",
      // Optional.  If specified, defines a unique icon for this item
      icon: "icon-spring-boot",
      // Optional.  If specified, enables matching other tag values to this category
      // item
      tags: [
        "springboot",
        "spring",
        "spring boot"
      ]
    });
}());
