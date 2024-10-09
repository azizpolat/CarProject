import Container from "@/app/contaiener";
import Card from "../card";

const getCars = async () => {
  try {
    const res = await fetch(`http://localhost:3000/api/vehicles`);

    return res.json();
  } catch (err) {
    throw new Error({ messsage: "Arac Verileri Alınamdı", err });
  }
};

const List = async () => {
  const data = await getCars();

  return (
    <Container>
      <h1 className="font-bold text-4xl">Bütün Araçları Kesfedin</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
        {data.vehicles.map((car) => (
          <div>
            <Card key={car._id} car={car} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default List;
