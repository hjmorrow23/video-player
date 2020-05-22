import { Router } from 'express';
import moment from 'moment';

const router = Router();
const attributes = [
    'id',
    'comment_id',
    'video_url',
    'title',
    'likes',
    'views',
    'thumb_url'
];

router.get('/', async (req, res) => {
    try {
        const videos = await req.context.models.Video.findAll({
            attributes
        });
        return res.send(videos); 
    } catch (err) {
        console.log(err)
    }
});

router.get('/:id', async (req, res) => {
    try {
        const video = await req.context.models.Video.findByPk(
            req.params.id,
            {
                attributes
            }
        );
        return res.send(video);
    } catch(err) {
        console.log(err);
    }
});
   
// router.post('/', async (req, res) => {
//     const video = await req.context.models.Video.create({
//         username: req.body.username,
//         password: req.body.password,
//         email: req.body.email,
//         created_on: moment().format(),
//         last_login: moment().format()
//     });
     
//     return res.send(user);
// });
   
// router.put('/:id', (req, res) => {
//     return res.send('Received a PUT HTTP method');
// });
   
router.delete('/:id', async (req, res) => {
    try {
        const result = await req.context.models.Video.destroy({
            where: { id: req.params.id },
        });
        
        return res.send(true);
    } catch(err) {
        console.log(err);
    }
    
});

export default router;