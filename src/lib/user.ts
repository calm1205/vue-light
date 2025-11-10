interface User {
  id: string
  name: string
  email: string
}

export const fetchUser = async (): Promise<{ data: User }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          id: "1",
          name: "John Doe",
          email: "john.doe@example.com",
        },
      })
    }, 1000)
  })
}
