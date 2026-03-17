export default function HomePage({ user }) {
  return `
    <h1>Home Page</h1>
    <p>Welcome to the Home Page! ${user ? `, ${user.name}!` : '!'}</p>
  `;
}
