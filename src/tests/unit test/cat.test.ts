import request from "supertest"
import * as root from "../../servers/cat.server.ts"

describe('Get all cat', () => {
    it('tests /destinations endpoints', async() => {
        const response = await request(root.app).get("/cat");
        expect(response.body).toHaveLength(3);
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(expect.arrayContaining([
            {
                id: 1,
                name: "cat1",
                age: 1
            },
            {
                id: 2,
                name: "cat2",
                age: 2
            },
            {
                id: 3,
                name: "cat3",
                age: 3
            }
        ]));
    });
});
