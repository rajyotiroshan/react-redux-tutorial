import Accordion from "../components/Accordion";
export default function AccordionPage() {
  const items = [
    {
      label: "can i use react?",
      id: "sdsd3242",
      content:
        "Use in any web apps! You can use react in any projects. You can use react in any projects. You can use react in any projects.",
    },
    {
      id: "srr3242",
      label: "can i use js?",
      content:
        "Use in any web apps! You can use react in any projects. You can use react in any projects. You can use react in any projects.",
    },
    {
      id: "sdsdre42",
      label: "can i use css?",
      content:
        "Use in any web apps! You can use react in any projects. You can use react in any projects. You can use react in any projects.",
    },
    {
      id: "sds24242",
      label: "can i use Vue.js?",
      content:
        "Use in any web apps! You can use react in any projects. You can use react in any projects. You can use react in any projects.",
    },
  ];
  return <Accordion items={items} />;
}
