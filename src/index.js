import React, { Component, createElement } from 'react';
import { render } from 'react-dom';
import {
  Anim,
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  ComponentPlayground,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  MarkdownSlides,
  Notes,
  Quote,
  Slide,
  SlideSet,
  TableBody,
  TableHeader,
  TableHeaderItem,
  TableItem,
  TableRow,
  Table,
  Text,
  GoToAction
} from 'spectacle';
// import preloader from '../../src/utils/preloader';
import createTheme from 'spectacle/lib/themes/default';
// import Interactive from '../assets/interactive';

// require('normalize.css');

// const images = {
//   city: require('../assets/city.jpg'),
//   kat: require('../assets/kat.gif'),
//   logo: require('../assets/formidable-logo.svg'),
//   markdown: require('../assets/markdown.png')
// };

// preloader(images);

const theme = createTheme({
  primary: '#57cbb5'
});

const StandardSlide = props => (
  <Slide {...props} style={{ WebkitAlignItems: 'baseline', margin: '5rem' }} />
);

const jsExampleSrc = `
export const HatList = (props) => 
  <ul className="hat-list">
    <li className="item">Wizard</li>
    <li className="selected item">
      Bowler
    </li>
  </ul>
`;

const cssExampleSrc = `
  hat-list {
    list-style: none;
  }

  selected { 
    background: #ababab;
  }
`;

export default class Presentation extends Component {
  constructor() {
    super(...arguments);

    this.updateSteps = this.updateSteps.bind(this);

    this.state = {
      steps: 0
    };
  }

  // state = {
  //   steps: 0
  // };

  updateSteps(steps) {
    if (this.state.steps !== steps) {
      this.setState({ steps });
    }
  }

  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        theme={theme}
        transitionDuration={500}
        controls={false}
        progress="bar"
        contentWidth="100%"
        contentHeight="100%"
      >
        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="black">
            styled-components
          </Heading>
          <Heading size={1} fit caps margin="20px 0px 0px">
            or how I learned to stop worrying and put everything in one file
          </Heading>
        </Slide>
        <StandardSlide textAlign="left">
          <Heading textAlign="left" textSize="64px">
            Typical react file structure
          </Heading>
          <List>
            <ListItem>
              talk about that{' '}
              <Appear>
                <span>wah</span>
              </Appear>
            </ListItem>
            <ListItem>and that</ListItem>
            <ListItem>and then this</ListItem>
          </List>
        </StandardSlide>
        <Slide transition={['zoom', 'fade']} bgColor="primary">
          <Heading style={{ fontSize: '3rem' }}>
            Why leave styles out of the fun?
          </Heading>
          <Layout>
            <Fill>
              <CodePane
                style={{ fontSize: '24px' }}
                lang="jsx"
                source={jsExampleSrc}
                margin="20px auto"
                overflow="overflow"
              />
            </Fill>
            <div style={{ width: '1rem' }}></div>
            <Fill>
              <CodePane
                style={{ fontSize: '24px' }}
                lang="css"
                source={cssExampleSrc}
                margin="20px auto"
                overflow="overflow"
              />
            </Fill>
          </Layout>
          <Appear>
            <Heading>rude</Heading>
          </Appear>
          <Notes>
            Use <code>layout</code> to <code>fill</code> or <code>fit</code>{' '}
            your content
          </Notes>
        </Slide>
        <Slide
          transitionIn={['zoom', 'fade']}
          transitionOut={['slide', 'fade']}
          bgColor="primary"
        >
          {/* <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/deck.example')}
            margin="20px auto"
            overflow="overflow"
          /> */}
          <Notes>
            <List>
              <ListItem>talk about that</ListItem>
              <ListItem>and that</ListItem>
              <ListItem>and then this</ListItem>
            </List>
          </Notes>
        </Slide>
        <Slide goTo={3}>
          <ComponentPlayground theme="dark" />
        </Slide>
        <Slide
          transition={['slide']}
          bgDarken={0.75}
          getAnimStep={this.updateSteps}
        >
          <Appear>
            <Heading size={1} caps textColor="tertiary">
              Can
            </Heading>
          </Appear>
          <Appear>
            <Heading size={1} caps textColor="secondary">
              Count
            </Heading>
          </Appear>
          <Appear>
            <Heading size={1} caps textColor="tertiary">
              Steps
            </Heading>
          </Appear>
          <Heading size={1} caps fit textColor="secondary">
            Steps: {this.state.steps}
          </Heading>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary">
          <Heading caps fit>
            Flexible Layouts
          </Heading>
          <Layout>
            <Fill>
              <Heading
                size={4}
                caps
                textColor="secondary"
                bgColor="white"
                margin={10}
              >
                Left
              </Heading>
            </Fill>
            <Fill>
              <Heading
                size={4}
                caps
                textColor="secondary"
                bgColor="white"
                margin={10}
              >
                Right
              </Heading>
            </Fill>
          </Layout>
          <Notes>
            Use <code>layout</code> to <code>fill</code> or <code>fit</code>{' '}
            your content
          </Notes>
        </Slide>
        <Slide transition={['slide']} bgColor="black">
          <BlockQuote>
            <Quote>Wonderfully formatted quotes</Quote>
            <Cite>Ken Wheeler</Cite>
          </BlockQuote>
        </Slide>
        <Slide
          transition={['spin', 'zoom']}
          bgColor="tertiary"
          controlColor="primary"
          progressColor="primary"
        >
          <Heading caps fit size={1} textColor="primary">
            Inline Markdown
          </Heading>
          <Markdown>
            {/* ![Markdown Logo](${images.markdown.replace('/', '')}) */}
            {`
  You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
  * Lists too!
  * With ~~strikethrough~~ and _italic_
  * And let's not forget **bold**
  * Add some \`inline code\` to your sldes!
            `}
          </Markdown>
          <Notes>Who doesn't love markdown?</Notes>
        </Slide>
        {MarkdownSlides`
#### Create Multiple Slides in Markdown
All the same tags and elements supported in <Markdown /> are supported in MarkdownSlides.
---
Slides are separated with **three dashes** and can be used _anywhere_ in the deck. The markdown can either be:
* A Tagged Template Literal
* Imported Markdown from another file
---
Add some inline code to your markdown!
\`\`\`js
const myCode = (is, great) => 'for' + 'sharing';
\`\`\`
          `}
        <Slide transition={['slide', 'spin']} bgColor="primary">
          <Heading caps fit size={1} textColor="tertiary">
            Smooth
          </Heading>
          <Heading caps fit size={1} textColor="secondary">
            Combinable Transitions
          </Heading>
          <Notes>So smooth</Notes>
        </Slide>
        {/* <SlideSet
          style={{ backgroundColor: 'blue', border: '10px solid cyan' }}
        >
          <Slide transition={['fade']} textColor="tertiary">
            <List>
              <Appear>
                <ListItem>Inline style based theme system</ListItem>
              </Appear>
              <Appear>
                <ListItem>Autofit text</ListItem>
              </Appear>
              <Appear>
                <ListItem>Flexbox layout system</ListItem>
              </Appear>
              <Appear>
                <ListItem>PDF export</ListItem>
              </Appear>
              <Appear>
                <ListItem bulletStyle="greenCheck">Customized bullets</ListItem>
              </Appear>
              <Appear>
                <ListItem>And...</ListItem>
              </Appear>
            </List>
          </Slide>
          {/* <Slide transition={['slide']} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive />
          </Slide> 
        </SlideSet> */}
        <Slide transition={['slide']} bgColor="primary">
          <Heading
            size={4}
            caps
            textColor="secondary"
            bgColor="white"
            margin={10}
          >
            Pizza Toppings
          </Heading>
          <Layout>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderItem />
                  <TableHeaderItem>2011</TableHeaderItem>
                  <TableHeaderItem>2013</TableHeaderItem>
                  <TableHeaderItem>2015</TableHeaderItem>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableItem>None</TableItem>
                  <TableItem>61.8%</TableItem>
                  <TableItem>39.6%</TableItem>
                  <TableItem>35.0%</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>Pineapple</TableItem>
                  <TableItem>28.3%</TableItem>
                  <TableItem>54.5%</TableItem>
                  <TableItem>61.5%</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>Pepperoni</TableItem>
                  <TableItem />
                  <TableItem>50.2%</TableItem>
                  <TableItem>77.2%</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>Olives</TableItem>
                  <TableItem />
                  <TableItem>24.9%</TableItem>
                  <TableItem>55.9%</TableItem>
                </TableRow>
              </TableBody>
            </Table>
          </Layout>
          <Notes>Hard to find cities without any pizza</Notes>
        </Slide>
        <Slide transition={['spin', 'slide']} bgColor="tertiary">
          <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
            Made with love in Seattle by
          </Heading>
          {/* <Link href="https://www.formidable.com">
            <Image width="100%" src={images.logo} />
          </Link> */}
          <Notes>Check us out → https://www.formidable.com</Notes>
        </Slide>
      </Deck>
    );
  }
}

// render(<Presentation />);
render(createElement(Presentation, null), document.getElementById('root'));
