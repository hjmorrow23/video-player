import { Router } from 'express';
import moment from 'moment';

const router = Router();
const attributes = [
    'id',
    'comment_id',
    'video_url',
    'title',
    'likes',
    'dislikes',
    'views',
    'thumb_url'
];

router.get('/', async (req, res) => {
    try {
        const videos = await req.context.models.Video.findAll({
            attributes,
            order: [
                ['id', 'ASC'],
            ],
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
   
router.put('/:id/:field', async (req, res) => {
    try {
        const video = await req.context.models.Video.increment(req.params.field, {
            where: {
                id: req.params.id
            }
        });
        res.send(video);
    } catch(err) {
        console.log(err);
    }
    
});
   
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