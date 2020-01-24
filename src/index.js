import React, { Component, createElement } from "react";
import { render } from "react-dom";
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
} from "spectacle";

import preloader from "spectacle/lib/utils/preloader";
import createTheme from "spectacle/lib/themes/default";
// import Interactive from '../assets/interactive';

// require('normalize.css');

import techradarImage from "./images/techradar.png";

const images = {
  techradar: techradarImage
};

preloader(images);

console.log(images.techradar);

import componentExample from "raw-loader!./styled.example";

console.log(componentExample);

const theme = createTheme({
  primary: "#57cbb5"
});

const StandardSlide = props => (
  <Slide
    style={{
      WebkitAlignItems: "baseline",
      margin: "2rem 5rem",
      textAlign: "left"
    }}
    {...props}
  />
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

const cssInJsExample1 = `
export const HatList = (props) =>
  <ul style={{listStyle: 'none'}}>
    <li>Wizard</li>
    <li style={{background: '#ababab'}}>Bowler</li>
  </ul>
`;

const cssInJsExample2 = `
const hatListStyles = {
  listStyle: 'none';
}

const hatListItemStyles = {
  background: '#ababab';
}

export const HatList = (props) =>
  <ul style={hatListStyles}>
    <li>Wizard</li>
    <li style={hatListItemStyles}>Bowler</li>
  </ul>
`;

const cssInJsExample3 = `
import styled from 'styled-components';
import palette from 'src/palette';

const HatListContainer = styled.ul\`
  list-style: none;
\`;

const HatListItem = styled.li\`
  background: \${props => props.selected \? palette.secondary : 'transparent'};
\`;

export const HatList = (props) =>
  <HatListContainer>
    <HatListItem>Wizard</HatListItem>
    <HatListItem selected={true}>Bowler</li>
  </HatListContainer>
`;

const dynamicExampleLeft = `
  import { ThemeProvider } 
    from 'styled-components';

  const theme = {
    primaryColor: '#ababab';
    secondaryColor: '#bababa';
  }

  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );`;

const dynamicExampleRight = `
  const Heading = styled.h1\`
    color: \${p => p.theme.primaryColor};
  \`;

  const SubHeading = styled.h1\`
    color: \${p => p.theme.secondaryColor};
  \`;

  export const App = () => (
    <Heading>Mythical App</Heading>
    <SubHeading>Click to win</SubHeading>
  )
`;

const structureSrc = `    
├── components
│   └── ComponentA
│       ├── ComponentA.tsx
│       ├── ComponentA.scss
│       ├── ComponentA.test.tsx
│       └── index.ts`;

export default class Presentation extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        theme={theme}
        transitionDuration={500}
        controls={false}
        progress="bar"
        contentWidth="100%"
        contentHeight="100%"
      >
        <Slide bgColor="primary" style={{ padding: "0 5rem" }}>
          <Heading size={1} fit caps lineHeight={1} textColor="black">
            styled-components
          </Heading>
          <Heading size={1} fit caps margin="20px 0px 0px">
            or how I learned to stop worrying and put everything in one file
          </Heading>
        </Slide>
        <StandardSlide bgColor="primary">
          <Heading size={4} style={{ textAlign: "left" }} textColor="tertiary">
            What we'll be covering
          </Heading>
          <List>
            <ListItem>What interests me</ListItem>
            <ListItem>Why it interests me</ListItem>
            <ListItem>Why it may interest you</ListItem>
          </List>
          <Appear>
            <div>
              <Heading
                size={4}
                style={{ textAlign: "left" }}
                textColor="tertiary"
              >
                What we won't be covering
              </Heading>
              <List>
                <ListItem>React best practices</ListItem>
                <ListItem>Spiritual teachings of Jayden Smith</ListItem>
                <ListItem>Where to keep your lemons</ListItem>
              </List>
            </div>
          </Appear>
        </StandardSlide>
        <Slide>
          <Heading textAlign="left" textSize="64px">
            Typical react file structure
          </Heading>
          <CodePane
            style={{ fontSize: "24px" }}
            margin="20px auto"
            source={structureSrc}
          />
        </Slide>
        <Slide bgColor="primary">
          <Heading style={{ fontSize: "3rem" }}>
            Why leave styles out of the fun?
          </Heading>
          <Layout>
            <Fill>
              <CodePane
                style={{ fontSize: "24px" }}
                lang="jsx"
                source={jsExampleSrc}
                margin="20px auto"
                overflow="overflow"
              />
            </Fill>
            <div style={{ width: "1rem" }}></div>
            <Fill>
              <CodePane
                style={{ fontSize: "24px" }}
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
        </Slide>
        <Slide bgColor="primary">
          <Heading style={{ fontSize: "3rem" }}>CSS in JS</Heading>
          <CodePane
            style={{ fontSize: "24px" }}
            lang="jsx"
            source={cssInJsExample1}
            margin="20px auto"
            overflow="overflow"
          />
          <Appear>
            <Heading>gross 🤮</Heading>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading style={{ fontSize: "3rem" }}>CSS in JS</Heading>
          <CodePane
            style={{ fontSize: "18px" }}
            lang="jsx"
            source={cssInJsExample2}
            margin="20px auto"
            overflow="overflow"
          />
          <Appear>
            <Heading size={4} textColor="tertiary">
              slightly better...😕
            </Heading>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading style={{ fontSize: "3rem" }}>Tagged templates</Heading>
          <CodePane
            style={{ fontSize: "18px" }}
            lang="jsx"
            source={cssInJsExample3}
            margin="20px auto"
            overflow="overflow"
          />
          <Appear>
            <Heading size={4} textColor="tertiary">
              yass 💪
            </Heading>
          </Appear>
        </Slide>
        {/* <Slide>
          <ComponentPlayground
            theme="dark"
            // code={componentExample}
            // syncCode={false}
            // scope={{}}
          />
        </Slide> */}
        <Slide>
          <Heading size={4} textColor="tertiary">
            Dynamic Themeing
          </Heading>
          <Layout>
            <Fill>
              <CodePane
                style={{ fontSize: "24px" }}
                lang="jsx"
                source={dynamicExampleLeft}
                margin="20px auto"
                overflow="overflow"
              />
            </Fill>
            <div style={{ width: "1rem" }}></div>
            <Appear>
              <Fill>
                <CodePane
                  style={{ fontSize: "24px" }}
                  lang="jsx"
                  source={dynamicExampleRight}
                  margin="20px auto"
                  overflow="overflow"
                />
              </Fill>
            </Appear>
          </Layout>
        </Slide>
        <Slide>
          <Heading size={4} textColor="tertiary">
            Example
          </Heading>
          <iframe
            height="500px"
            width="1000px"
            style={{ margin: "2rem" }}
            src="https://memdeck-reaction.netlify.com/settings"
          ></iframe>
        </Slide>
        <Slide bgColor="black">
          <BlockQuote>
            <Quote>How Can Mirrors Be Real If Our Eyes Aren't Real</Quote>
            <Cite>Jayden Smith</Cite>
          </BlockQuote>
        </Slide>
        <Slide>
          <Heading size={4} textColor="tertiary">
            Why am I going on about this?
          </Heading>
          <Image width="60%" margin="2rem auto" src={images.techradar} />
          <Cite>ThoughtWorks tech radar</Cite>
        </Slide>
        <StandardSlide>
          <Heading textAlign="left" size={4} textColor="tertiary">
            How is this even relevant?
          </Heading>
          <List>
            <ListItem margin="2rem 0">
              Built in support for per-application branding{" "}
              <Appear>
                <Text textSize="0.75em" margin="1rem 4rem">
                  🤷‍♂️ our current scss stack already supports this
                </Text>
              </Appear>
            </ListItem>
            <ListItem margin="2rem 0">
              Supports sub-application branding
              <Appear>
                <Text textSize="0.75em" margin="1rem 4rem">
                  ✔️ Reasonable chance we want this
                </Text>
              </Appear>
            </ListItem>
            <ListItem margin="2rem 0">
              White labelling{" "}
              <Appear>
                <Text textSize="0.75em" margin="1rem 4rem">
                  💸 Potentially pie in the sky
                </Text>
              </Appear>
            </ListItem>
          </List>
        </StandardSlide>
        <Slide>
          <Heading>Questions?</Heading>
        </Slide>
      </Deck>
    );
  }
}

// render(<Presentation />);
render(createElement(Presentation, null), document.getElementById("root"));
