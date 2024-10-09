import Header from "@/app/components/header";
import Container from "@/app/contaiener";
import BreadCrumb from "../BreadCrumb";
import Title from "../Title";
import Images from "../Images";

const getDetail = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/vehicles/${id}`);

    return res.json();
  } catch (err) {
    throw new Error(err.message);
  }
};

const Detay = async ({ params }) => {
  const data = await getDetail(params.id);
  console.log(data);

  return (
    <div>
      <Header designs="bg-black text-white" />

      <Container designs="mt-5">
        <BreadCrumb />
        <Title />
        <Images />
      </Container>
    </div>
  );
};

export default Detay;
