import path from 'path'
import express from 'express';
import multer from 'multer';
const router = express.Router();


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log('destination')
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        console.log('filenaem')
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
    }
})

function checkFileType(file, cb) {
    const fileTypes = /jpg|jpeg|png/
    const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType = fileTypes.test(file.mimetype);
    if (extName && mimeType) {
        console.log('true')
        return cb(null, true)
    }
    else {
        console.log('false')
        cb('Images Only')
    }
}
const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb)
    }
});


router.post('/', upload.single('image'), (req, res) => {
    console.log('one')
    res.send(`/${req.file.path}`)
})


export default router;