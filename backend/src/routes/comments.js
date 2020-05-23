import { Router } from 'express';
import moment from 'moment';

const router = Router(); 
const attributes = [
    'id',
    'video_id',
    'user_id',
    'comment'
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

// router.get('/:id', async (req, res) => {
//     try {
//         const comment = await req.context.models.Comment.findByPk(
//             req.params.id,
//             {
//                 attributes
//             }
//         );
//         return res.send(comment);
//     } catch(err) {
//         console.log(err);
//     }
// });

router.get('/:videoId', async (req, res) => {
    try {
        const id = req.params.videoId
        const comments = await req.context.models.Comment.findAll(
            {
                attributes,
                where: {
                    video_id: id
                }
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
        comment: req.body.comment
    }, {
        fields: attributes,
    });
     
    return res.send(video);
});
   
// router.put('/:id', (req, res) => {
//     return res.send('Received a PUT HTTP method');
// });
   
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