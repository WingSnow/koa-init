import Router from 'koa-router'
import auth from '@/controllers/authController'

const router: Router = new Router()

router.post('/token', auth)

router.get('/', async (ctx) => {
  ctx.body = 'Hello Koa and TS.'
})

export default router

export const defaultPath = ['/token']
