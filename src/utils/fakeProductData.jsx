import { faker } from '@faker-js/faker'
import { nanoid } from 'nanoid'

export function generateProducts() {
    return {
        "id": nanoid(4),
        "title": faker.commerce.product(),
        "image": faker.image.url({ width: 200, height: 300, category: "fashion" }),
        "price": faker.commerce.price({ min: 100, max: 5000 }),
        "rating": faker.number.int({ min: 1, max: 5 }),
        "ratingCount": faker.number.int({ min: 50, max: 500 }),
        "whishList": false,
    }
}

