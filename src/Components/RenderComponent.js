import Content from "./ContentComponent";
import Header from "./HeaderComponent";

function RenderComponent() {
  return (
    <div style={{height: "100%"}}>
      <Header />
      <Content />
    </div>
  );
}

export default RenderComponent;
