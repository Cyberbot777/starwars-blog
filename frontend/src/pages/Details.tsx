import { useParams } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";

export default function Details() {
  const { type, id } = useParams();

  return (
    <PageWrapper>
      <h1 className="text-2xl font-bold text-gray-100 mb-4">Details Page</h1>
      <p className="text-gray-300">Type: {type}</p>
      <p className="text-gray-300">ID: {id}</p>
    </PageWrapper>
  );
}
