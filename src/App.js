import Accordion from "./components/Accordion";
export default function App() {
  const items = [
    {
      label: "can i use react?",
      id: "sdsd3242",
      content: "Use in any web apps!",
    },
    {
      id: "srr3242",
      label: "can i use js?",
      content: "Use in any web apps!",
    },
    {
      id: "sdsdre42",
      label: "can i use css?",
      content: "Use in any web apps!",
    },
    {
      id: "sds24242",
      label: "can i use Vue.js?",
      content: "Use in any web apps!",
    },
  ];
  return <Accordion items={items} />;
}
