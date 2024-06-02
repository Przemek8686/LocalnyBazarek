import React, { useState, useEffect } from 'react';
import { InfoContainer, Logo, InfoContent, LogoContainer, Title, Title1, Paragraph } from "./styled";
import Loader from '../Loader'; // Import Loader component
import logo from "../../Images/logo2.png"; // Import logo image

const Info = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const totalLoadingTime = 3000; // 6 seconds
    const intervalTime = 100; // Update every 100ms

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + (100 * intervalTime) / totalLoadingTime;
        if (newProgress >= 100) {
          clearInterval(interval);
          setLoading(false);
          return 100;
        }
        return newProgress;
      });
    }, intervalTime);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  if (loading) {
    return <Loader progress={progress} />;
  }

  return (
    <InfoContainer>
      <LogoContainer>
        <Logo src={logo} alt="Logo" />
        <div><Title>Lokalny Bazarek</Title>
          <Title1>Powiat słupecki</Title1></div>

      </LogoContainer>
      <InfoContent>

        <Paragraph>

          Witaj na Lokalnym Bazarku w powiecie słupeckim! To miejsce, gdzie łączymy się z lokalnymi rolnikami, producentami i przetwórcami, wspierając ich pasję i wysiłek. Jest to miejsce, gdzie można przesyłać oferty świeżych warzyw, owoców, pieczywa, ręcznie robionych serów, ciast, soków, przetworów, tradycyjnych wędlin, mięs i kiełbas, unikalnych rękodzieł oraz roślin ozdobnych oraz sadzonki warzyw i owoców.

          Kupowanie od lokalnych producentów przynosi wiele korzyści. Przede wszystkim, wspieramy lokalną gospodarkę i pomagamy utrzymać tradycyjne metody produkcji. Produkty są świeższe i wyższej jakości, ponieważ nie muszą pokonywać długich dystansów. Ponadto, wspierając lokalnych rolników i rzemieślników, przyczyniamy się do zachowania bioróżnorodności i ochrony środowiska. Tworzymy również silne więzi lokalne, budując poczucie wspólnoty.

          Zachęcamy do przesyłania artykułów na temat rolnictwa, ogrodnictwa, przepisów i innych interesujących tematów, które opublikujemy w sekcji Blog.
        </Paragraph>
      </InfoContent>
    </InfoContainer>
  );
};

export default Info;
