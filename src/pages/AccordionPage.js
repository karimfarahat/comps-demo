import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "aakak",
      label: "Can i use react in project?",
      content: "Yes, You can!",
    },
    {
      id: "jsaje",
      label: "Can i use JS in project?",
      content: "Yes, You can!",
    },
    {
      id: "osaoo",
      label: "Can i use NEXT in project?",
      content: "Yes, You can!",
    },
  ];
  return <Accordion items={items} />;
}

export default AccordionPage;
