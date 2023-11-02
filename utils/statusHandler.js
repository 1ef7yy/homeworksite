const path = require("path");

const statusHandler = (response, status) => {
    return response.sendFile(path.resolve('static/pages/notFound.html'));
};

module.exports = {
    statusHandler: statusHandler
};