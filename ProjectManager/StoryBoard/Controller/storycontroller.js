angular.module('storyApp')
    .controller('StoryController', function (STORY_TYPES, StoryModel) {
        var sc = this;

        sc.storyTypes = STORY_TYPES;

        sc.stories = StoryModel.stories;

        sc.currentStory = sc.stories[1];

        sc.updatingStory = angular.copy(sc.stories[1]);

        sc.updateStory = function () {
            sc.currentStory = angular.copy(updatingStory);
        }

        sc.changeCurrent = function (storyId) {
            
            var index = null;
            for (var i = 0; i < sc.stories.length; i++) {
                if (sc.stories[i].id == storyId) {
                    index = i;
                    break;
                }
            }
            if (index !== null) {
                sc.currentStory = sc.stories[index];
                sc.updatingStory = angular.copy(sc.currentStory);
            }
        }
    });