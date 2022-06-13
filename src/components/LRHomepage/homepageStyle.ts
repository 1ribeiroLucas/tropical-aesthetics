import styled from 'styled-components';

export const HomepageSection = styled("section")`
  width: 100%;
  max-width: 1024px;
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
  font-size: 48px;
  text-align: left;
`

export const HomepageHeaderH2 = styled("h2")`
  font-size: 40px;
  text-align: center;
`

export const HomepageHeaderH3 = styled("h3")`
  font-size: 32px;
  text-align: right;
`

export const HomepageSubSection = styled("section")`
  width: 80%;
  text-align: center;
  margin: 16px auto;
`;

export const HomepageSubSectionH3 = styled("h3")`
  height: 72px;
  line-height: 72px;
  font-size: 32px;
  text-align: left;
  padding-left: 48px;
  background-color: var(--dark-blue);
  color: #EEEEEE;
  position: relative;
  margin: 16px 0;
  
  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-top: 72px solid var(--pink-one);
    border-left: 256px solid transparent;    
    right: 0;
  }
`;

export const HomepageSubSectionParagraph = styled("p")`
  text-align: left;
  font-size: 16px;
`;

export const HomepageStackList = styled("ul")`
  width: 100%;
  max-height: 300px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  list-style-type: none;
  color: var(--dark-blue);
`;

export const HomepageStackListItem = styled("li")`
  width: fit-content;
  height: 48px;
  line-height: 48px;
  margin: 16px;
`;
