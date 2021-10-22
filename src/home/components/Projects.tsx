import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionItemProps,
  AccordionPanel,
  Box,
  Heading,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { ExternalLink } from '../../components/Links';

// TODO: remove item id's once this is fixed: https://github.com/chakra-ui/chakra-ui/issues/4328

const Projects = () => {
  return (
    <Accordion allowToggle defaultIndex={0}>
      <Item id={'pensight'} heading={'Pensigh'}>
        <ExternalLink href="http://pensight.com/">Pensight</ExternalLink>, based in London, is a platform that enables
        experts to monetise their knowledge via paid video consultations. The startup recently{' '}
        <ExternalLink href="https://www.crunchbase.com/organization/pensight">raised a seed of $3M</ExternalLink>, and
        I&apos;m one of the first developers to join the{' '}
        <ExternalLink href="https://pensight.com/team">top notch team</ExternalLink>, which includes the founder of
        Eventbrite.
      </Item>
      <Item id={'aimtal'} heading={'Aimtal'}>
        <ExternalLink href="http://aimtal.com/">Aimtal</ExternalLink> is a Boston-base digital marketing agency, whose
        clients include companies like Trello and Confluence. I helped them to get technical things right: web
        development, SEO, internal technical processes and alike.
      </Item>
      <Item id={'labl.it'} heading={'Labl.it'}>
        <ExternalLink href="https://labl.it/">Labl.it</ExternalLink> is a UK-based startup that delivers digital
        solutions for commercial kitchens. I worked with the team in their early stages as the only developer, when I
        built the app that helped them raise pre-seed funding.
      </Item>
      <Item id={'dweet.'} heading={'Dweet'}>
        London-based <ExternalLink href="https://dweet.com/">Dweet</ExternalLink> is Upwork for the fashion & luxury
        industries. My role was to aid the team in making their web app mobile friendly.
      </Item>
      <Item id={'grow-football'} heading={'Grow Football'}>
        <ExternalLink href="https://www.grow.football/">Grow Football</ExternalLink> delivers real-time football
        analysis to iPhones. I collaborated with their cutting-edge research team on my master&apos;s thesis, when I
        created an AI-based fitness mobile application to minimise the risk of sports injuries. The app uses
        iPhone&apos;s front-facing camera and computer vision in real-time to recognise & analyse the exercise and
        alerts the user of incorrect technique.
      </Item>
      <Item id={'foodprint'} heading={'Foodprint'}>
        Did you know that food production is responsible for{' '}
        <ExternalLink href="https://ourworldindata.org/food-ghg-emissions">
          26% of global greenhouse gas emissions
        </ExternalLink>
        ? My group project at Imperial College London developed the{' '}
        <ExternalLink href="https://foodprint.orth.uk/">Foodprint</ExternalLink> mobile app to inform general public on
        the CO<sub>2</sub> impact of the food they consume, or even better: before they consume it. The metrics is
        instantly computed from unpackaged food photos, barcodes, and recipes — this way the app can be easily used in
        the store and aid users in their responsible buy decisions.
      </Item>
    </Accordion>
  );
};

interface ItemProps extends AccordionItemProps {
  heading: string;
  children: ReactNode;
}

const Item = ({ heading, children, ...rest }: ItemProps) => {
  return (
    <AccordionItem borderTopWidth={2} borderColor={'secondary.light'} _last={{ borderBottomWidth: 2 }} {...rest}>
      <h2>
        <AccordionButton color={'secondary.light'} _expanded={{ color: 'primary.light' }}>
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
