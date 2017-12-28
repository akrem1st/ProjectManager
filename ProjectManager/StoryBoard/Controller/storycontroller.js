angular.module('storyApp')
    .controller('StoryController', function (STORY_TYPES, StoryModel) {
        var sc = this;

        sc.storyTypes = STORY_TYPES;

        sc.stories = StoryModel.stories;

        sc.updatingStory = angular.copy(sc.stories[0]);

        sc.updateStory = function () {
            alert('sup');
            sc.updatingStory = angular.copy(sc.stories[1]);
        }
    });