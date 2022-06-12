import styled from 'styled-components';

export const HomepageSection = styled("section")`
  width: 90%;
  margin: 0 auto;
  padding: 16px;
`;

export const HomepageHeader = styled("header")`
  width: 100%;
  text-align: center;
  margin: 0 auto;

  > h1, h2, h3 {
    width: 100%;
  }
`;

export const HomepageHeaderH1 = styled("h1")`
  font-size: 40px;
  text-align: left;
`

export const HomepageHeaderH2 = styled("h2")`
  font-size: 32px;
  text-align: center;
`

export const HomepageHeaderH3 = styled("h3")`
  font-size: 24px;
  text-align: right;
`

export const HomepageSubSection = styled("section")`
  width: 80%;
  text-align: center;
  margin: 16px auto;
`;

export const HomepageSubSectionParagraph = styled("p")`
  text-align: left;
`;

export const HomepageStackList = styled("ul")`
  width: 100%;
  max-height: 300px;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  list-style-type: none;
  color: var(--dark-blue);
`;

export const HomepageStackListItem = styled("li")`
  width: fit-content;
  height: 48px;
  line-height: 48px;
  margin: 8px 0;
`;
