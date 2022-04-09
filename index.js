import { createReadStream } from 'fs'
import { parse } from 'csv-parse'
import { FilterByCountry } from './filterByCountry.js'
import { SumProfit } from './sumProfit.js'

const csvParser = parse({columns: true})

const country = process.argv[2] || 'Brazil'

createReadStream('data.csv')
    .pipe(csvParser)
    .pipe(new FilterByCountry(country.toUpperCase()))
    .pipe(new SumProfit())
    .pipe(process.stdout)