import { Router } from 'https://deno.land/x/oak@v6.0.0/mod.ts';
import {
  getBeers,
  getBeerDetails,
  createBeer,
  updateBeer,
  deleteBeer
} from './controllers/beer.ts';

const router = new Router();

router
  .get('/beers', getBeers)
  .get('/beers/:id', getBeerDetails)
  .post('/beers', createBeer)
  .put('/beers/:id', updateBeer)
  .delete('/beers/:id', deleteBeer);

export default router;