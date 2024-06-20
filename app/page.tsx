import Container from "../components/ui/container";
import {Billboard} from "../components/billboard";
import getProducts from "../actions/get-products";
import ProductList from "@/components/product-list";
const Home = async () => {
  const products = await getProducts({isFeatured: true});
  return (
    <Container>
      <div className="space-y-10 pb-10">
      <Billboard title="DMajor Store" photoUrl="https://firebasestorage.googleapis.com/v0/b/staynest-e6646.appspot.com/o/newyork.jpeg?alt=media&token=7e95f93d-d675-4c08-b261-7f2be6b46999" />
      </div>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="Featured Products" items={products}/>
      </div>
    </Container>
  );

}
export default Home;