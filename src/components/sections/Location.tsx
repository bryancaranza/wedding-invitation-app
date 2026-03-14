const Location = () => {
  return (
    <section className="py-20 px-6 bg-black/40 backdrop-blur-md text-center">
      <div className="max-w-3xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 justify-center items-start">
        {/* CHURCH */}
        <div className="w-full h-webkit lg:w-1/2 flex flex-col justify-between gap-4">
          <div>
            <h2 className="text-3xl font-serif mb-2">Church</h2>

            <p className="text-center lg:text-left">
              Block 44 Lot 7-8, New Capitol Estate 1, Commonwealth Ave, Quezon
              City, Metro Manila
            </p>
          </div>

          <div className="w-full">
            <iframe
              className="w-full h-96 rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30876.998521535403!2d121.08239434638669!3d14.67722088811289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b097521d278b%3A0xd7c5d145e19c38c!2sSt.%20Peter%20Parish%3A%20Shrine%20of%20Leaders%20(Diocese%20of%20Novaliches)!5e0!3m2!1sen!2sph!4v1770741696466!5m2!1sen!2sph"
              loading="lazy"
            />
          </div>
        </div>

        {/* RECEPTION */}
        <div className="w-full h-webkit lg:w-1/2 flex flex-col justify-between gap-4">
          <div>
            <h2 className="text-3xl font-serif mb-2">Reception</h2>

            <p className="text-center lg:text-left">
              Don Victorino St. in the Don Antonio Heights Subdivision (South
              Gate), along Holy Spirit Drive in Barangay Holy Spirit, Quezon
              City
            </p>
          </div>

          <div className="w-full">
            <iframe
              className="w-full h-96 rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.581445240919!2d121.07781007415109!3d14.679678775137589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ba0004dde4a7%3A0x78d0aa468b55313d!2sDon%20Antonio%20Heights%20Clubhouse!5e0!3m2!1sen!2sph!4v1773409823135!5m2!1sen!2sph"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
