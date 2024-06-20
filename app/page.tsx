import Container from "../components/ui/container";
import {Billboard} from "../components/billboard"
const Home = async () => {

  return (
    <Container>
      <div className="space-y-10 pb-10">
      <Billboard title="Sample Title" photoUrl="https://firebasestorage.googleapis.com/v0/b/staynest-e6646.appspot.com/o/newyork.jpeg?alt=media&token=7e95f93d-d675-4c08-b261-7f2be6b46999" />
      </div>
    </Container>
  );

}
export default Home;