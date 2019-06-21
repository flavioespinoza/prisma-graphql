import { prisma } from './generated/prisma-client'

const Chance = require('chance')
const chance = new Chance()

const user_data = {
	name: chance.first()
}

// A `main` function so that we can use async/await
async function main() {
	// Create a new user called `Alice`
	const newUser = await prisma.createUser(user_data)
	console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`)

	// Read all users from the database and print them to the console
	const allUsers = await prisma.users()
	console.log(allUsers)

	// const user = await prisma.user({ id: '__USER_ID__' })

	// const usersCalledAlice = await prisma.users({
	// 	where: {
	// 		name: 'Alice',
	// 	},
	// })

	// const deletedUser = await prisma.deleteUser({ id: '5d0c21e3410df800075b3144' })

	// const updatedUser = await prisma.updateUser({
	// 	where: { id: '__USER_ID__' },
	// 	data: { name: 'Bob' },
	// })

}

main().catch(e => console.error(e))