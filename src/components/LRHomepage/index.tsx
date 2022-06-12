import React from 'react';
import {
  HomepageHeader,
  HomepageHeaderH1,
  HomepageHeaderH2,
  HomepageHeaderH3,
  HomepageSection,
  HomepageStackList,
  HomepageStackListItem,
  HomepageSubSection,
  HomepageSubSectionParagraph
} from './homepageStyle';

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiSass,
  SiStyledcomponents,
  SiTestinglibrary,
  SiJest,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiMongodb,

} from 'react-icons/si'

export const LRHomepage: React.FC = (): JSX.Element => {
  return (
    <HomepageSection>
      <HomepageHeader>
        <HomepageHeaderH1>Lucas M. Ribeiro</HomepageHeaderH1>
        <HomepageHeaderH2>Desenvolvedor Web</HomepageHeaderH2>
        <HomepageHeaderH3>Especialidade: Front-End</HomepageHeaderH3>
      </HomepageHeader>
      <HomepageSubSection>
        <h3>Perfil</h3>
        <HomepageSubSectionParagraph>
          Um desenvolvedor web curioso viciado em videogames antigos, queijos, destilados e
          música estranha. Sempre buscando uma forma mais robusta e elegante de
          escrever sistemas, minha especialidade é o front-end (sou o cara
          das telinhas, para os mais íntimos). Meu objetivo é transformar suas ideias e protótipos
          em aplicações bonitas e seguras, atendendo suas necessidades da melhor maneira possível.
        </HomepageSubSectionParagraph>
      </HomepageSubSection>
      <HomepageSubSection>
        <h3>Com o que eu trabalho?</h3>
        <HomepageStackList>
          <HomepageStackListItem>
            <SiHtml5 size={48} />
          </HomepageStackListItem>
          <HomepageStackListItem>
            <SiCss3 size={48} />
          </HomepageStackListItem>
          <HomepageStackListItem>
            <SiJavascript size={48} />
          </HomepageStackListItem>
          <HomepageStackListItem>
            <SiTypescript size={48} />
          </HomepageStackListItem>
          <HomepageStackListItem>
            <SiReact size={48} />
          </HomepageStackListItem>
          <HomepageStackListItem>
            <SiRedux size={48} />
          </HomepageStackListItem>
          <HomepageStackListItem>
            <SiSass size={48} />
          </HomepageStackListItem>
          <HomepageStackListItem>
            <SiStyledcomponents size={48} />
          </HomepageStackListItem>
          <HomepageStackListItem>
            <SiTestinglibrary size={48} />
          </HomepageStackListItem>
          <HomepageStackListItem>
            <SiJest size={48} />
          </HomepageStackListItem>
          <HomepageStackListItem>
            <SiNodedotjs size={48} />
          </HomepageStackListItem>
          <HomepageStackListItem>
            <SiExpress size={48} />
          </HomepageStackListItem>
          <HomepageStackListItem>
            <SiMysql size={48} />
          </HomepageStackListItem>
          <HomepageStackListItem>
            <SiPostgresql size={48} />
          </HomepageStackListItem>
          <HomepageStackListItem>
            <SiMongodb size={48} />
          </HomepageStackListItem>
        </HomepageStackList>
      </HomepageSubSection>
    </HomepageSection>
  )
};