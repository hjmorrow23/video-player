import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';
import models, { sequelize } from './models';
import routes from './routes';
 
const app = express();

const eraseDatabaseOnSync = false;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(async (req, res, next) => {
    req.context = {
      models,
    };
    next();
});

app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/videos', routes.videos);
app.use('/comments', routes.comments);

const createUsers = async () => {
    await models.User.create(
        {
            username: 'henry',
            password: '1234',
            email: 'hjmorrow23@gmail.com'
        }
    );
};
 
sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {
    if (eraseDatabaseOnSync) {
        createUsers();
    }

    app.listen(process.env.PORT, () =>
        console.log(`Example app listening on port ${process.env.PORT}!`),
    );
});