import { JumbotronContainer } from "../containers/jumbotron";
import { FaqsContainer } from "../containers/faq";
import { FooterContainer } from "../containers/footer";

export default function Home() {
  return (
    <>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
