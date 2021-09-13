import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

const Projects = () => {
  return (
    <Accordion allowToggle defaultIndex={0}>
      <Item heading={'Aimtal'}>
        Aimtal is a Boston-base digital marketing agency, whose clients include companies like Trello and Confluence. I
        help them to get technical things right: web development, SEO, internal technical processes and alike.
      </Item>
      <Item heading={'Labl.it'}>
        Labl.it is a UK-based startup that delivers digital solutions for commercial kitchens. I worked with the team in
        their early stages as the only developer, when I built an app that helped them raise pre-seed funding.
      </Item>
      <Item heading={'Dweet'}>
        London-based Dweet is Upwork for the fashion & luxury industries. My role was to aid the team in making their
        web app mobile friendly.
      </Item>
      <Item heading={'Grow Football'}>
        Grow Football delivers real-time football analysis to iPhones. I collaborated with their cutting-edge research
        team on my master&apos;s thesis, when I created an AI-based fitness mobile application to minimise the risk of
        sports injuries. The app uses iPhone&apos;s front-facing camera in real-time to recognise & analyse the exercise
        and alerts the user of incorrect technique.
      </Item>
      <Item heading={'Foodprint'}>
        Did you know that food production is responsible for 26% of global greenhouse gas emissions? My group project at
        Imperial College London developed the Foodprint mobile app to inform general public on the CO<sub>2</sub> impact
        of the food they consume, or even better: before they consume it. The metrics is instantly computed from
        unpackaged food photos, barcodes, and recipes — this way the app can be easily used in the store and aid users
        in their responsible buy decisions.
      </Item>
    </Accordion>
  );
};

interface ItemProps {
  heading: string;
  children: ReactNode;
}

const Item = ({ heading, children }: ItemProps) => {
  return (
    <AccordionItem borderTopWidth={2} borderColor={'tertiary.light'} _last={{ borderBottomWidth: 2 }}>
      <h2>
        <AccordionButton color={'tertiary.light'} _expanded={{ color: 'secondary.light' }}>
          <Box flex="1" textAlign="left">
            <Heading as={'h3'}>{heading}</Heading>
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>{children}</AccordionPanel>
    </AccordionItem>
  );
};

export default Projects;
