import React, { useState, useEffect } from 'react';
import { InfoContainer, Logo, InfoContent, LogoContainer, Title, Title1, Paragraph } from "./styled";
import logo from "../../Images/logo2.png"; // Import logo image

const Info = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // 3 seconds

    return () => clearTimeout(loadingTimeout); // Clean up the timeout on component unmount
  }, []);

  if (loading) {
    return (
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999
      }}>
        {/* Transparent background for 3 seconds */}
      </div>
    );
  }

  return (
    <InfoContainer>
      <LogoContainer>
        <Logo src={logo} alt="Logo" />
        <div>
          <Title>Lokalny Bazarek</Title>
          <Title1>Powiat słupecki</Title1>
        </div>
      </LogoContainer>
      <InfoContent>
        <Paragraph>
          Witaj na Lokalnym Bazarku w powiecie słupeckim! To miejsce, gdzie łączymy się z lokalnymi rolnikami, producentami i przetwórcami, wspierając ich pasję i wysiłek. Jest to miejsce, gdzie możecie przesyłać oraz szukać oferty świeżych warzyw, owoców, pieczywa, ręcznie robionych serów, ciast, soków, przetworów, tradycyjnych wędlin, mięs i kiełbas, unikalnych rękodzieł oraz roślin ozdobnych oraz sadzonki warzyw i owoców.
          Kupowanie od lokalnych producentów przynosi wiele korzyści. Przede wszystkim, wspieramy lokalną gospodarkę i pomagamy utrzymać tradycyjne metody produkcji. Produkty są świeższe i wyższej jakości, ponieważ nie muszą pokonywać długich dystansów. Ponadto, wspierając lokalnych rolników i rzemieślników, przyczyniamy się do zachowania bioróżnorodności i ochrony środowiska. Tworzymy również silne więzi lokalne, budując poczucie wspólnoty.
          Zachęcamy do przesyłania artykułów na temat rolnictwa, ogrodnictwa, przepisów i innych interesujących tematów, które opublikujemy w sekcji Blog.
        </Paragraph>
      </InfoContent>
    </InfoContainer>
  );
};

export default Info;
