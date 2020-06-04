import { Router } from 'express';
import moment from 'moment';

const router = Router();
const attributes = [
    'username',
    'id',
    'email',
];

//Get all users
router.get('/', async (req, res) => {
    try {
        const users = await req.context.models.User.findAll({
            attributes
        });
        return res.send(users); 
    } catch (err) {
        console.log(err)
    }
    
});

//Get user by id
router.get('/:id', async (req, res) => {
    try {
        const user = await req.context.models.User.findByPk(
            req.params.id,
            {
                attributes
            }
        );
        return res.send(user);
    } catch(err) {
        console.log(err);
    }
    
});
 
//Post new user
router.post('/', async (req, res) => {
    try {
        const user = await req.context.models.User.create({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            created_on: moment().format(),
            last_login: moment().format()
        });
        
        return res.send(user);
    } catch(err) {
        console.log(err);
    }
    
});
   
//Delete user
router.delete('/:userId', async (req, res) => {
    try {
        const result = await req.context.models.User.destroy({
            where: { id: req.params.userId },
        });
         
        return res.send(true);
    } catch(err) {
        console.log(err);
    }
    
});

export default router;