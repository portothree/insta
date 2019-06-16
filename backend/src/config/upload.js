const multer = require('multer');
const path = require('path');

module.exports = {
    storate: new multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
    })
};