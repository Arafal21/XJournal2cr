export function loginUser(formData: FormData): Promise<Response> {
	return fetch('http://localhost:3000/ImWaitingForAddressFromTheBackend', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			username: formData.get('username'),
			password: formData.get('password'),
		}),
	});
}
