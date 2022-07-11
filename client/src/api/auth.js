import service from './service';

export const signup = (name, password, email) => {
	const requestBody = { email, password, name };
	return service.post('/auth/signup', requestBody);
};

//login
export const login = (password, email) => {
	const requestBody = { email, password };
	return service.post('/auth/login', requestBody);
};
