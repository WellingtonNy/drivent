import httpStatus from 'http-status';
import supertest from 'supertest';
import { createEvent } from '../factories';
import { cleanDb } from '../helpers';
<<<<<<< HEAD
import app, { init, close } from '@/app';
=======
import app, { init } from '@/app';
>>>>>>> 16c5480c3d328c63006f5f18b3b42aa9a36b220a

beforeAll(async () => {
  await init();
  await cleanDb();
});

<<<<<<< HEAD
afterAll(async () => {
  await close();
});

=======
>>>>>>> 16c5480c3d328c63006f5f18b3b42aa9a36b220a
const server = supertest(app);

describe('GET /event', () => {
  it('should respond with status 404 if there is no event', async () => {
    const response = await server.get('/event');

    expect(response.status).toBe(httpStatus.NOT_FOUND);
  });

  it('should respond with status 200 and event data if there is an event', async () => {
    const event = await createEvent();

    const response = await server.get('/event');

    expect(response.status).toBe(httpStatus.OK);
    expect(response.body).toEqual({
      id: event.id,
      title: event.title,
      backgroundImageUrl: event.backgroundImageUrl,
      logoImageUrl: event.logoImageUrl,
      startsAt: event.startsAt.toISOString(),
      endsAt: event.endsAt.toISOString(),
    });
  });
});
