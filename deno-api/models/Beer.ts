import client from '../db/database.ts';

class Beer {
  create(beer: any) {
    return client.query(
      'INSERT INTO beers (name, brand, is_premium, registration_date) VALUES ($1, $2, $3, $4)',
      beer.name,
      beer.brand,
      beer.is_premium,
      beer.registration_date
    );
  }

  selectAll() {
    return client.query('SELECT * FROM beers ORDER BY id');
  }

  selectById(id: any) {
    return client.query(`SELECT * FROM beers WHERE id = $1`, id);
  }

  update(id: any, beer: any) {
    const latestBeer = this.selectById(id);
    const query = `UPDATE beers SET name = $1, brand = $2, is_premium = $3 WHERE id = $4`;

    return client.query(query,
      beer.name !== undefined ? beer.name : latestBeer.name,
      beer.brand !== undefined ? beer.brand : latestBeer.brand,
      beer.is_premium !== undefined ? beer.is_premium : latestBeer.is_premium, id);
  }

}

export type BeerType = {
  [index: string] : {
    name: string,
    brand: string,
    is_premium: any,
    registration_date: any
  }
}

export default new Beer();