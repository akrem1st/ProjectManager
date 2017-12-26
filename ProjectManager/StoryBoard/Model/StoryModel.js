angular.module('storyApp')
    .value('STORY_TYPES', [
        { name: 'Design' },
        { name: 'Dev' },
        { name: 'QA' },
        { name: 'Release' }
    ]
    )
    .service('StoryModel', function (STORY_TYPES) {
        var story = this;
        story.stories = [
            {
                id: 101,
                title: "story 1",
                description: "first story",
                type: STORY_TYPES[0],
                created: new Date('2017/12/01')
            },
            {
                id: 102,
                title: "story 2",
                description: "first story",
                type: STORY_TYPES[2],
                created: new Date('2017/12/02')
            }
        ];
    });