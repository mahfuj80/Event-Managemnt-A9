import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

// Demo styles, see 'Styles' section below for some notes on use.

const Accordions = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-around items-center gap-3">
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          {/* 1st */}
          <Accordion allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>What is your Question</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                My Answer is nothing but i want to fuck you My Answer is nothing
                but i want to fuck you My Answer is nothing but i want to fuck
                you
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
          {/* 2nd */}
          <Accordion allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>What is your Question</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                My Answer is nothing but i want to fuck you My Answer is nothing
                but i want to fuck you My Answer is nothing but i want to fuck
                you
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
          {/* 3rd */}
          <Accordion allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>What is your Question</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                My Answer is nothing but i want to fuck you My Answer is nothing
                but i want to fuck you My Answer is nothing but i want to fuck
                you
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          {/* 1st */}
          <Accordion allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>What is your Question</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                My Answer is nothing but i want to fuck you
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
          {/* 2nd */}
          <Accordion allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>What is your Question</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                My Answer is nothing but i want to fuck you
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
          {/* 3rd */}
          <Accordion allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>What is your Question</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                My Answer is nothing but i want to fuck you
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default Accordions;
