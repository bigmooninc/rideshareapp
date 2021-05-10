export function getSession({context}) {
  return {
    user: context.user && {
      email: context.user.email
    }
  }
}