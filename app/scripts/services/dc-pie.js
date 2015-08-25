/**
 * Created by zhangh2 on 8/24/15.
 */

StudyView.application.addService('dc-pie', function(application) {
  return {
    route: function(url, state) {
      history.pushState(state, '', url);
    }
  };
});
