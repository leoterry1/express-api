import multer from 'multer';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const CURRENT_DIR = dirname(fileURLToPath(import.meta.url));

const storage = multer.diskStorage({
 destination: (req, file, cb) => {
  cb(null, join(CURRENT_DIR, '../uploads'));
 },
 filename: (req, file, cb) => {
  const extension = file.mimetype.split("/")[1];
  cb(null, Date.now() + "." + extension);
 },
})

export const removeAttachment = (attachment) => {
    const filename = attachment.split('/').slice(-1)[0];
    fs.unlinkSync(join(CURRENT_DIR, '../uploads', filename));
}

export const upload = multer({ storage: storage });
