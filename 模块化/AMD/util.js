define(function() {
  return {
    getFormatDate(d, type) {
      if (type == 1) {
        return d.toJSON().split('T')[0];
      }
      if (type == 2) {
        return d.toJSON();
      }
    }
  };
});
