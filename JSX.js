var courses = [
    {
        name:'HTML,CSS 2',
    },
    {
        name:'Reponsive web degsi 2',
    },
    {
        name:'React js 2',
    }
];

var ul = React.createElement('ul',null,

    courses.map(function (course,index) {
    return    React.createElement('li',null,course.name);   
    })
);

var root = document.querySelector('#root');
    ReactDOM.render(ul,root)
