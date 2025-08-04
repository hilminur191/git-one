export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-4 py-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">My Projects</h1>
      <ul className="space-y-4">
        <li className="p-4 border rounded-lg shadow">
          <h2 className="text-xl font-semibold text-blue-700">Project 1</h2>
          <p className="text-gray-600">Deskripsi singkat tentang project 1</p>
        </li>
        <li className="p-4 border rounded-lg shadow">
          <h2 className="text-xl font-semibold text-blue-700">Project 2</h2>
          <p className="text-gray-600">Deskripsi singkat tentang project 2</p>
        </li>
      </ul>
    </main>
  );
}
