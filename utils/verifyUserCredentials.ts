type userDataType = {
  id?: string;
  email: string;
  password: string;
};

// Mock test data
enum UserData {
  ID = "1",
  EMAIL = "test_user",
  PASSWORD = "Test1234",
}

export const verifyUserCredentials = (userData: userDataType): boolean => {
  // console.log(userData, 'user');
  const { email, password } = userData;
  if (email === UserData.EMAIL && password === UserData.PASSWORD) {
    return true;
  }

  return false;
};
