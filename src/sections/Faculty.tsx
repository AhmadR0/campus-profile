export default function Faculty() {
  const staff = [
    {
      name: "Dr. Andi Pratama",
      role: "Dosen Kebidanan",
      field: "Program Studi S1 Kebidanan",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJuy5Qo6a4S6VV_v3reyKJklcmhjGQFe5n4Q&s",
    },
    {
      name: "Prof. Siti Rahmawati",
      role: "Dosen Manajemen Informasi Kesehatan",
      field: "Rekamedik",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAZHW2CNAvfLqA5rmu0PCKHrAQvW8ZG4wimQ&s",
    },
    {
      name: "Ir. Budi Santoso, M.Eng",
      role: "Kepala Laboratorium",
      field: "Robotika & IoT",
      image: "https://i.pravatar.cc/200?img=3",
    },
    {
      name: "Dr. Lestari Wijaya",
      role: "Dosen Matematika",
      field: "Aljabar & Optimisasi",
      image: "https://i.pravatar.cc/200?img=4",
    },
  ];

  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Dosen & Staf
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {staff.map((person, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg shadow-md p-6 text-center hover:shadow-xl transition"
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">{person.name}</h3>
              <p className="text-sm text-black">{person.role}</p>
              <p className="text-sm text-gray-600 mt-1">{person.field}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
