import app from '../app'
import supertest from 'supertest'

const requestWithSuperTest = supertest(app)

// Inside the describe() method. The second parameter should 
// be all about testing the endpoints.
describe('User Endpoint', () => {
    it('GET /user should show all users', async () => {
        const res = await requestWithSuperTest.get('/users')
        expect(res.status).toEqual(200)
        expect(res.type).toEqual(expect.stringContaining('json'))
        expect(res.body).toHaveProperty('users')

    })

    it('GET /user should show a user', async () => {
        const res = await requestWithSuperTest.get('/users/1')
        expect(res.status).toEqual(200)
        expect(res.type).toEqual(expect.stringContaining('json'))
        expect(res.body).toHaveProperty('users')

    })
})