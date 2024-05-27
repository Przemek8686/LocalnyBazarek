import React from "react";
import { InfoContainer, Logo, InfoContent, LogoContainer, Title } from "./styled";

import logo from "../../Images/logo2.png"; // Import logo image

const Info = () => (
  <InfoContainer>
    <LogoContainer>
      <Logo src={logo} alt="Logo" />
      <Title>Lokalny Bazarek</Title>
    </LogoContainer>
    <InfoContent>
      <h2>Witaj w Lokalnym Bazarku</h2>
      <p>
        Witaj na Lokalnym Bazarku - miejscu, gdzie łączymy się z lokalnymi rolnikami,
        producentami i przetwórcami aby wspierać ich pasję i wysiłek. Nasza platforma to nie
        tylko rynek, ale prawdziwe centrum lokalnej kultury kulinarnej i
        rzemieślniczej. Tutaj możesz oferować oraz szukać świeże warzywa i owoce prosto z pola,
        aromatyczne pieczywo wypiekane z miłością oraz ręcznie robione sery i
        ciasta, które rozgrzewają serce. Ponadto,
        wyborne nalewki, soki i przetwory, które kuszą swoim smakiem i jakością.
        To także miejsce dla miłośników tradycyjnych wędlin, mięs i kiełbas , jak również dla entuzjastów ogrodów, których pasja są rośliny
        ozdobne oraz warzywne i owocowe sadzonki,które mogą  urozmaicić przydomowe ogródki. Zanurz się w
        bogactwie lokalnych smaków i doświadczeń na Lokalnym Bazarku! Kupowanie
        od lokalnych rolników i rzemieślników to nie tylko sposób na zdobycie
        świeżych i wysokiej jakości produktów, ale także aktywny udział w
        wspieraniu lokalnej społeczności. Poprzez zakupy bezpośrednio u
        producentów, wspieramy lokalną gospodarkę i pomagamy utrzymać tradycyjne
        metody produkcji. Ponadto, wspierając lokalnych rolników, przyczyniamy
        się do zachowania bioróżnorodności i ochrony środowiska. Ostatecznie, wspierając lokalnych producentów, tworzymy więź z
        naszą społecznością, budując silne więzi lokalne i kultywując poczucie
        wspólnoty. To dlatego tak ważne jest, by kupować od lokalnych rolników i
        rzemieślników - nie tylko dla naszego zdrowia i przyjemności, ale
        również dla dobra naszej planety i społeczności.Liczymy na Wasze uwagi i pomysły dotyczące rozwoju strony Lokalny Bazarek. Zachęcamy do przesyłania nam własnych artykułów na temat rolnictwa, sadownictwa, ogrodnictwa, przepisów na przetwory oraz innych interesujących tematów dla Naszych odwiedzających.Będziemy je publikować w sekcji Blog.
      </p>
    </InfoContent>
  </InfoContainer>
);

export default Info;