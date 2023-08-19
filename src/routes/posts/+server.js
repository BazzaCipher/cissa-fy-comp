import { json } from '@sveltejs/kit';
import * as database from '$lib/server/database.js';

/**
 * @param {any} request
 */
export async function POST({ request, cookies }) {
	const { post_content, tags } = await request.json();

	const userid = cookies.get('userid');
	await database.addPost(userid, post_content, {
        tags
    })

	return json({ status: 201 });
}