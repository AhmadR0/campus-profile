export default function About() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            About Our Campus
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta animi voluptatum beatae vitae quaerat unde repellat quidem, expedita ex? Deleniti optio impedit tempora eveniet itaque! Nam sint ullam repudiandae eveniet.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Our mission is to inspire curiosity, foster academic excellence, 
            and cultivate a culture of inclusivity and integrity.
          </p>
          <p className="text-lg text-gray-700">
            Together, we strive to shape a brighter future for generations to come.
          </p>
        </div>

        {/* Image */}
        <div>
          <img
            src="https://sevima.com/wp-content/uploads/2025/08/Politeknik-Cendrawasih-Palu.jpg"
            alt="Campus Building"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
