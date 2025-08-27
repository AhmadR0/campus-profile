import { faculties } from "../services/dummy";

export default function Faculties() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-10">Fakultas</h2>
      <div className="grid md:grid-cols-3 gap-6 px-6 md:px-20">
        {faculties.map((fak) => (
          <div
            key={fak.id}
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{fak.name}</h3>
            <p className="text-gray-400">{fak.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
