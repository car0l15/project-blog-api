require('dotenv').config();

import app from './API';

const port = process.env.API_PORT || 3000;

app.get('/', (_request: any, response: any) => 
{
   response.send();
});

app.listen(port, () => console.log('servidor rodando na porta ', port))