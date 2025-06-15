import createClient from 'openapi-fetch'
import { paths } from './v1'
import { BACKEND_URL } from './backend'

export const client = createClient<paths>({
	baseUrl: BACKEND_URL,
})
