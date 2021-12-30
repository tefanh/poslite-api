import * as bcrypt from 'bcrypt';

const saltOrRounds = 10;

export const hash = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, saltOrRounds);
};

export const isMatch = async (
  password: string,
  hash: string,
): Promise<boolean> => {
  return await bcrypt.compare(password, hash);
};
