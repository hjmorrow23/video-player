import { Router } from 'express';
import moment from 'moment';

const router = Router(); 
const attributes = [
    'id',
    'video_id',
    'user_id',
    'comment',
    'comment_date'
];

router.get('/', async (req, res) => {
    try {
        const comments = await req.context.models.Comment.findAll({
            attributes
        });
        return res.send(comments); 
    } catch (err) {
        console.log(err)
    }
});

router.get('/:videoId', async (req, res) => {
    try {
        const id = req.params.videoId
        const comments = await req.context.models.Comment.findAll(
            {
                attributes,
                where: {
                    video_id: id
                },
                order: [
                    ['comment_date', 'DESC'],
                ],
            }
        );
        return res.send(comments);
    } catch(err) {
        console.log(err);
    }
});
   
router.post('/', async (req, res) => {
    const video = await req.context.models.Comment.create({
        video_id: req.body.video_id,
        user_id: req.body.user_id,
        comment: req.body.comment,
        comment_date: req.body.comment_date
    }, {
        fields: attributes,
    });
     
    return res.send(video);
});
   
router.delete('/:id', async (req, res) => {
    try {
        const result = await req.context.models.Comment.destroy({
            where: { id: req.params.id },
        });
        
        return res.send(true);
    } catch(err) {
        console.log(err);
    }
    
});

export default router;