const {render} = require("express/lib/application"),
      validSubjects = require("./validSubjects");
const renderObject = (subject_id) => {
    return {
        title: validSubjects[subject_id]

    };
};

module.exports = {
    renderObject: renderObject
};