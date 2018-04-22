/* global angular */
/* global stampit */

const createStamp = stampit.default;

const Team = createStamp({
    props: {
        name: 'A Default Team',
        score: 0
    },
    init({ name = this.name }) {
        this.name = name;
    },
    methods: {
        setName(newName) {
            if (newName) {
                this.name = newName;
            }
        },
        adjustScore(delta) {
            this.score += delta;
        }
    }
});

angular
    .module('scoreBoardApp', [])
    .controller('gameController', ($scope) => {
        $scope.teams = new Array(100);
    })
    .controller('teamController', ($scope) => {
        $scope.team = Team({});
    });
