const services = [
    {
        id: 1,
        title: "First Slide",
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
      },
      {
        id: 2,
        title: "Second Slide",
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
      },
      {
        id: 3,
        title: "Third Slide",
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
      },
]
const HomeService = () => {
    return (
        <div className='service p-20'>
            <h1 className="text-center text-3xl font-bold mb-14">Our Services</h1>
        <div className='grid md:grid-cols-3 lg:grid-cols-3 gap-14'>
            
                {
                    services.map(service => <div key={service.id} className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                    <h2 className="text-center text-3xl">{service.title}</h2>
                    <p>{service.description}</p>
                    <div className="card-actions justify-center">
                    <button className="btn btn-primary">see more</button>
                    </div>
                </div>
            </div>
                )}
        </div>
        </div>
    );
};

export default HomeService;