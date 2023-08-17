import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { AppModule } from './app.module'
import * as cookieParser from 'cookie-parser'

const start = async () => {
	const PORT = process.env.PORT || 4200
	const HOST = process.env.HOST || 'localhost'
	try {
		const app = await NestFactory.create<NestExpressApplication>(AppModule)
		app.enableCors()
		app.setGlobalPrefix('api')
		app.enableShutdownHooks()
		app.use(cookieParser())
		await app.listen(PORT, () =>
			console.log(`Server is running on ${HOST}:${PORT}`)
		)
	} catch (e) {
		console.log(e)
	}
}

start()
