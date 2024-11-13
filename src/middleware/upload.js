import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {     // cb -> callback
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {    
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

export const upload = multer({ storage })