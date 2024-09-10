export const isEmpty = (value: string) => !value.trim();

export const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email);