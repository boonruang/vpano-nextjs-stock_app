// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { products } from './dummy'

export default function handler(req, res) {
  res.statusCode = 200
  res.json(products)
}
